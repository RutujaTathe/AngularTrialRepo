import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demopipe',
  standalone: true,
})
export class DemopipePipe implements PipeTransform {
  transform(value1: number, value2: number): number {
    return value1+value2;
  }
}
