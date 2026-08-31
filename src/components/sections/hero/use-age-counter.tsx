"use client";

import { Skeleton } from "@/src/components/ui/skeleton";
import { useEffect, useState } from "react";

export function useAgeCounter(start: Date) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());

    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!now) {
    return null;
  }

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

export function AgeCounter() {
  const age = useAgeCounter(
    new Date("2003-05-02T18:45:00")
  );

  if (!age) {
    return (
      <dl className="grid grid-cols-4 gap-4 pt-8 border-t border-border font-mono max-w-lg">
        <div>
          <dt className="text-[9px] uppercase tracking-widest text-muted-foreground">
            Anos
          </dt>

          <Skeleton className="h-7 w-8 mt-1" />
        </div>

        <div>
          <dt className="text-[9px] uppercase tracking-widest text-muted-foreground">
            Dias
          </dt>

          <Skeleton className="h-7 w-8 mt-1" />
        </div>

        <div>
          <dt className="text-[9px] uppercase tracking-widest text-muted-foreground">
            Meses
          </dt>

          <Skeleton className="h-7 w-8 mt-1" />
        </div>

        <div>
          <dt className="text-[9px] uppercase tracking-widest text-muted-foreground">
            Uptime
          </dt>

          <Skeleton className="h-7 w-20 mt-1" />
        </div>
      </dl>
    );
  }

  const {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
  } = age;

  return (
    <dl className="grid grid-cols-4 gap-4 pt-8 border-t border-border font-mono max-w-lg">
      <div>
        <dt className="text-[9px] uppercase tracking-widest text-muted-foreground">Anos</dt>
        <dd className="text-xl text-foreground mt-1 tabular-nums">{years}</dd>
      </div>
      <div>
        <dt className="text-[9px] uppercase tracking-widest text-muted-foreground">Dias</dt>
        <dd className="text-xl text-foreground mt-1 tabular-nums">{days}</dd>
      </div>
      <div>
        <dt className="text-[9px] uppercase tracking-widest text-muted-foreground">{months == 1 ? "Mês" : "Meses"}</dt>
        <dd className="text-xl text-foreground mt-1">{months}</dd>
      </div>
      <div>
        <dt className="text-[9px] uppercase tracking-widest text-muted-foreground">Uptime</dt>
        <dd className="text-xl text-accent mt-1 tabular-nums">
          {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </dd>
      </div>
    </dl>
  )
}
