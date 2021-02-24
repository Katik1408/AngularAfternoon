import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appbackgroundColor]',
})
export class BackgroundDirective {
  //ELementRef
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'red';
  }
}
