import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export function todayISO() { return new Date().toISOString().slice(0,10); }
export function uid() { return crypto.randomUUID(); }
