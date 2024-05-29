import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[buttonHoverD]'
})
export class ButtonHoverDDirective {
  @HostBinding('style.backgroundColor') backgroundColor:string = 'brown';
  @HostBinding('style.color') color:string = 'white';
  @HostListener('mouseenter') onMouseEnter(){
    this.backgroundColor = 'white';
    this.color = 'brown';
  }
  @HostListener('mouseout') onMouseOut(){
    this.backgroundColor = 'brown';
    this.color = 'white';
  }
}
