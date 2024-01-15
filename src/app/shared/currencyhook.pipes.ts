import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CurrencyVND',
})
export class Currency implements PipeTransform {
  transform(value: any): any {
    return value + ' ' + 'VND';
  }
}
