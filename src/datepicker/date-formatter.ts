import { formatDate } from '@danielson73s/ngx-bootstrap/chronos';

export class DateFormatter {
  format(date: Date, format: string, locale: string): string {
    return formatDate(date, format, locale);
  }
}
