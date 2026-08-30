"use client";

import { useEffect, useState } from "react";

export function useAgeCounter(start: Date) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const diff = Math.max(0, now.getTime() - start.getTime());

  const totalSeconds = Math.floor(diff / 1000);

  const years = Math.floor(
    totalSeconds / (365.25 * 24 * 60 * 60)
  );

  const remainingAfterYears =
    totalSeconds - Math.floor(years * 365.25 * 24 * 60 * 60);

  const months = Math.floor(
    remainingAfterYears / (30.44 * 24 * 60 * 60)
  );

  const remainingAfterMonths =
    remainingAfterYears -
    Math.floor(months * 30.44 * 24 * 60 * 60);

  const days = Math.floor(remainingAfterMonths / 86400);

  const remainingAfterDays = remainingAfterMonths - days * 86400;

  const hours = Math.floor(remainingAfterDays / 3600);

  const minutes = Math.floor(
    (remainingAfterDays % 3600) / 60
  );

  const seconds = remainingAfterDays % 60;

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
  };
}
