import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[zoomD]'
})
export class ZoomDDirective {
  @HostBinding('style.font-size') textDecoration:string = '1em'
  @HostListener('mouseenter') onMouseEnter(){
    this.textDecoration = '1.1em';
  }
  @HostListener('mouseout') onMouseOut(){
    this.textDecoration = '1em';
  }
}
