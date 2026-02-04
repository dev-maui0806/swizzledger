import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: March 15, 2026
    const targetDate = new Date("2026-03-15T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-foreground tabular-nums">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-6 md:gap-8">
      <TimeBlock value={timeLeft.days} label="Days" />
      <span className="text-2xl text-muted-foreground">:</span>
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <span className="text-2xl text-muted-foreground">:</span>
      <TimeBlock value={timeLeft.minutes} label="Minutes" />
      <span className="text-2xl text-muted-foreground">:</span>
      <TimeBlock value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
