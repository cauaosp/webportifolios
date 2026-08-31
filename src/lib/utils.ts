import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getOnlineStatus = (): boolean => {
  const hour = new Date().getHours();

  return hour >= 6 && hour < 18;
};
