// Vercel serverless function – reads TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID from Vercel env
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

async function sendToTelegram(message, token, chatId) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: "Markdown",
    }),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, data };
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID in Vercel env");
      return res.status(500).json({ error: "Telegram not configured" });
    }

    const body = req.body || {};
    const message =
      body.type === "newsletter"
        ? formatNewsletterMessage(body)
        : formatLeadMessage(body);

    let result = await sendToTelegram(message, token, chatId);

    if (!result.ok) {
      const migrateToChatId = result.data?.parameters?.migrate_to_chat_id;
      if (typeof migrateToChatId === "number") {
        result = await sendToTelegram(message, token, migrateToChatId);
      }
      if (!result.ok) {
        throw new Error(JSON.stringify(result.data));
      }
    }

    return res.status(200).json({ success: true, message: "Lead sent to Telegram" });
  } catch (err) {
    console.error("send-lead error:", err);
    return res.status(500).json({ error: err.message });
  }
}
