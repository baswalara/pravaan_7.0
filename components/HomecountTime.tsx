import { aboutNPfont11 } from "@/lib/font.utils";
import { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Target: March 7, 2026 at 11:00 AM
  const targetDate = new Date("March 6, 2026 00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`text-[4rem] max-sm:text-[1.4rem] text-center text-blue-900 ${aboutNPfont11.className}`}
    >
      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s{" "}
      left
    </div>
  );
};

export default CountdownTimer;
