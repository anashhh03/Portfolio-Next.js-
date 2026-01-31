//  This Is For background rippple effect At Hero Section
// Also For Wavy BG
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
