import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCOP(value: number) {
  const n = Math.round(Number(value) || 0);
  const withThousands = n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `$${withThousands}`;
}
