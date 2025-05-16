export default function toTimeOnlyDate(time: string): Date {
  const [hours, minutes] = time.split(':').map(Number);
  const date = new Date(Date.UTC(1970, 0, 1, hours, minutes));
  return date;
}
