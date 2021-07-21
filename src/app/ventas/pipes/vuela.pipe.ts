import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela',
})
export class VuelaPipe implements PipeTransform {
  transform(vuela: boolean): string {
    /* if (enMayusculas) {
      return value.toUpperCase();
    } else {
      return value.toLocaleLowerCase();
    } */
    return vuela ? 'si vuela' : 'no vuela';
  }
}
