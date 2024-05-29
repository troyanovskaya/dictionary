import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[opacityD]'
})
export class OpacityDDirective {
  @HostBinding('style.opacity') opacity:string = '1'
  @HostListener('mouseenter') onMouseEnter(){
    this.opacity = '0.8';
  }
  @HostListener('mouseout') onMouseOut(){
    this.opacity = '1';
  }
}
