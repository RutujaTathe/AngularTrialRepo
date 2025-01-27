import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addition',
  standalone: true,
})
export class AdditionPipe implements PipeTransform {
  transform(value1: number, value2: number): unknown {
    return value1 + value2;
  }
}
