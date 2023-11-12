import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetters',
  standalone: true,
})
export class FirstLettersPipe implements PipeTransform {
  transform(value: string): string {
    const arr = value.split(' ');
    return `${this.getFirstLetter(arr[0])}${
      arr[1] ? this.getFirstLetter(arr[1]) : ''
    }`;
  }

  private getFirstLetter(str: string): string {
    return str.split('')[0].toUpperCase();
  }
}
