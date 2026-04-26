import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function assetPath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`
  return process.env.NODE_ENV === "production" ? `/portfolio${normalized}` : normalized
}
