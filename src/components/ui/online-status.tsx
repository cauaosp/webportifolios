"use client";

import { getOnlineStatus } from "@/src/lib/utils";

export function OnlineStatus({ hero }: { hero?: boolean }) {
  const isOnline = getOnlineStatus();

  return (
    <span className="text-accent flex items-center gap-1.5">
      <span
        className={`size-1.5 rounded-full animate-pulse ${
          isOnline ? "bg-accent" : "bg-red-400"
        }`}
      />
      {hero && (isOnline ? "online" : "studying")}

    </span>
  );
}
