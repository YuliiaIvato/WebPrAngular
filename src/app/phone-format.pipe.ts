import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
  standalone: true
})
export class PhoneFormatPipe implements PipeTransform {
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: string): string {
    if (!value) return '';

    let phoneNumber = value.replace(/\D/g, ''); // Видаляємо всі нецифрові символи

    if (phoneNumber.length === 10) {
      return phoneNumber.replace(/(\d{3})(\d{2})(\d{2})(\d{3})/, '($1) $2 $3 $4'); // (xxx) xx xx xxx
    } else if (phoneNumber.length === 11) {
      return phoneNumber.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '+$1-$2-$3-$4'); // +1-xxx-xxx-xxxx
    } else if (phoneNumber.length >= 12) {
      return phoneNumber.replace(/(\d{2})(\d{3})(\d{2})(\d{2})(\d{3})/, '+$1 ($2) $3 $4 $5'); // +38 (xxx) xx xx xxx
    }

    return value; // Повертаємо як є, якщо не підходить під жоден формат
  }
}
