import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[underlineD]'
})
export class UnderlineDDirective {
  @HostBinding('style.text-decoration') textDecoration:string = 'none'
  @HostListener('mouseenter') onMouseEnter(){
    this.textDecoration = 'underline';
  }
  @HostListener('mouseout') onMouseOut(){
    this.textDecoration = 'none';
  }
}
