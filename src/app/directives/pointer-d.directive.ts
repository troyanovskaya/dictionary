import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[pointerD]'
})
export class PointerDDirective {
  @HostBinding('style.cursor') cursor:string = 'auto'
  @HostListener('mouseenter') onMouseEnter(){
    this.cursor = 'pointer';
  }
  @HostListener('mouseout') onMouseOut(){
    this.cursor = 'auto';
  }
}
