import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatKz(value: number) {
  return `${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Kz`;
}

export const WHATSAPP = "244945407841";
export const WHATSAPP_DISPLAY = "+244 945-407-841";
export const EMAIL = "orlog.arrulo@setesete.ao";
export const FOUNDER_NAME = "Orlog Arrulo";
export const FOUNDER_TITLE = "Founder";
export const INSTAGRAM = "https://www.instagram.com/setesete.ao/";
export const HOURS = "12h – 22h";
export const CITY = "Luanda";
