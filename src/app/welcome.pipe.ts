import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome',
  standalone: true,
})
export class WelcomePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value + '   this is welcome pipe';
  }
}
