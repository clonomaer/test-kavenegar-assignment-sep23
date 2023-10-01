import { defaultLocale } from "../locales/default";

export function formatServerDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export function parseServerDate(dateString: string): Date | null {
  const match = dateString.match(
    /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/
  );

  if (!match) {
    console.error("Invalid date string format for", dateString);
    return null;
  }

  return new Date(dateString);
}

export function formatLocalDate(date: Date | null): string {
  return date ? date.toLocaleDateString() : defaultLocale.main.notAvailable;
}
