"use client";

import { useEffect, useState } from "react";

export const AgeCounter = () => {
  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
    minutes: 0,
    hours: 0,
    seconds: 0,
  });

  useEffect(() => {
    const birthDate = new Date("2003-05-02T18:45:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - birthDate.getTime();

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      const remainingAfterYears = diff % (1000 * 60 * 60 * 24 * 365.25);

      const months = Math.floor(
        remainingAfterYears / (1000 * 60 * 60 * 24 * 30.44)
      );
      const remainingAfterMonths =
        remainingAfterYears % (1000 * 60 * 60 * 24 * 30.44);

      const days = Math.floor(remainingAfterMonths / (1000 * 60 * 60 * 24));
      const remainingAfterDays = remainingAfterMonths % (1000 * 60 * 60 * 24);

      const hours = Math.floor(remainingAfterDays / (1000 * 60 * 60));
      const remainingAfterHours = remainingAfterDays % (1000 * 60 * 60);

      const minutes = Math.floor(remainingAfterHours / (1000 * 60));
      const remainingAfterMinutes = remainingAfterHours % (1000 * 60);

      const seconds = Math.floor(remainingAfterMinutes / 1000);

      setAge({ years, months, days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [age]);

  return (
    <span className="text-emerald-400 font-mono">
      {age.years} anos, {age.months} meses, {age.days} dias, {age.hours} horas,{" "}
      {age.minutes} minutos e {age.seconds} segundos
    </span>
  );
};
