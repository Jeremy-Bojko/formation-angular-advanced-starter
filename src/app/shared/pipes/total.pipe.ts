import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {
  transform(val: any, tva?: boolean): number {
    if(tva) {
      return val.totalTtc();
    } else {
      return val.totalHt();
    }
  }

}
