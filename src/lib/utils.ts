import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getOnlineStatus = (): boolean => {
  const hour = Number(
    new Intl.DateTimeFormat("pt-BR", {
      timeZone: "America/Fortaleza",
      hour: "2-digit",
      hour12: false
    }).format(new Date())
  );

  return hour >= 6 && hour < 18;
};
