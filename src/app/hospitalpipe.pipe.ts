import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hospitalpipe',
  standalone: true,
})
export class HospitalpipePipe implements PipeTransform {
  transform(value: any): any[] {
    return [value + '.........................' + 'Hi'];
  }
}
