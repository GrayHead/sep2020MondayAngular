import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private  element: ElementRef, private renderer: Renderer2) {
    // // console.log(element);
    // // console.log(element.nativeElement);
    // // element.nativeElement.style.background = 'red';
    //
    // renderer.setStyle(element.nativeElement, 'background', 'red');
    // renderer.setAttribute(element.nativeElement, 'id', 'target');
    console.log(element);
  }

  @HostListener('mouseover')
  setBg(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background', 'red');
    this.renderer.setAttribute(this.element.nativeElement, 'asd', 'target');
    // this.renderer.addClass(this.element.nativeElement, 'xxx');
  }

  @HostListener('mouseleave')
  detachBg(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background', 'white');

  }


}
