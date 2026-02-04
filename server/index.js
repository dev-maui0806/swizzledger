import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const ledgerUserLabels = { yes: "Yes", no: "No" };

function formatLeadMessage(leadData) {
  return `🎫 *New Lead - Ledger Conference*

👤 *Contact:*
• Name: ${leadData.firstName || ""} ${leadData.lastName || ""}
• Phone: ${leadData.phone || ""}
• Email: ${leadData.email || ""}

🔐 *Ledger User:*
• Status: ${ledgerUserLabels[leadData.isLedgerUser] || leadData.isLedgerUser || ""}

📅 Time: ${new Date().toLocaleString("en-GB", { timeZone: "America/Los_Angeles" })}`;
}

function formatNewsletterMessage(leadData) {
  return `📬 *New Newsletter Subscription*

🏠 *Address:*
• Street: ${leadData.street || ""}
• City: ${leadData.city || ""}
• Postal Code: ${leadData.postalCode || ""}
• Country: ${leadData.country || ""}

📅 Time: ${new Date().toLocaleString("en-GB", { timeZone: "America/Los_Angeles" })}`;
}

async function sendToTelegram(message) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: "Markdown",
    }),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, data };
}

app.post("/send-lead", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  try {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID in .env");
      return res.status(500).json({ error: "Telegram not configured" });
    }

    const body = req.body;
    const message =
      body.type === "newsletter"
        ? formatNewsletterMessage(body)
        : formatLeadMessage(body);

    const { ok, data } = await sendToTelegram(message);

    if (!ok) {
      const migrateToChatId = data?.parameters?.migrate_to_chat_id;
      if (typeof migrateToChatId === "number") {
        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
        const retry = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: migrateToChatId,
            text: message,
            parse_mode: "Markdown",
          }),
        });
        const retryData = await retry.json().catch(() => ({}));
        if (!retry.ok) {
          throw new Error(JSON.stringify(retryData));
        }
        return res.json({ success: true, message: "Lead sent to Telegram" });
      }
      throw new Error(JSON.stringify(data));
    }

    res.json({ success: true, message: "Lead sent to Telegram" });
  } catch (err) {
    console.error("send-lead error:", err);
    res.status(500).json({ error: err.message });
  }
});

// CORS preflight
app.options("/send-lead", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.sendStatus(204);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Telegram lead server running on http://localhost:${PORT}`);
});
