import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[randomBackgroundColor]',
  standalone: true,
})
export class RandomBackgroundColorDirective {
  constructor(el: ElementRef) {
    el.nativeElement.setAttribute(
      'style',
      `background-color: ${this.getColor()}`
    );
  }

  private getColor(): string {
    const letters = '0123456789ABCDEF';
    let result = '000000';
    return (
      '#' +
      result
        .split('')
        .map((e) => letters[Math.floor(Math.random() * 16)])
        .join('')
    );
  }
}
