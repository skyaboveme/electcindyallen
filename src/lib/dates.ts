const calendarFormat: Intl.DateTimeFormatOptions = {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
};

export function formatCalendarDate(date: Date) {
  return date.toLocaleDateString("en-US", calendarFormat);
}

/** Keep a date-only collection value on the intended calendar day in Central Time. */
export function toCentralNoonIso(date: Date) {
  const [year, month, day] = date.toISOString().slice(0, 10).split("-");
  return `${year}-${month}-${day}T12:00:00-05:00`;
}
