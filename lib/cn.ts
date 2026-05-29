import { type ClassValue, clsx } from "clsx";

// Minimal cn — clsx-only (no tailwind-merge to keep deps lean for landing).
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
