import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWhatsAppUrl(message?: string): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919895000000";
  const defaultMsg =
    "Hi Core Fitness Club,\nI would like to know more about your membership plans.";
  const encoded = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${number}?text=${encoded}`;
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-IN").format(num);
}
