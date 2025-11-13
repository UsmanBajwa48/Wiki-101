export function getFutureDate(daysToAdd: number): string {
  const date = new Date();
  date.setDate(date.getDate() + daysToAdd);
  return date.toISOString().split("T")[0]; 
}

export function formatDateForDisplay(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).replace(/ /g, " ");
}

export function getCheckInDate(): string {
  return getFutureDate(10); 
}

export function getCheckOutDate(): string {
  return getFutureDate(20); 
}
