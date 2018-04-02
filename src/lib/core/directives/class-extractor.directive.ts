import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[aerClassExtractor]'
})
export class ClassExtractorDirective {

  constructor(public el: ElementRef, public renderer: Renderer2) {

  }

  ngOnInit() {
    const elem: HTMLElement = this.el.nativeElement;
    if (elem != null) {
      let className = elem.innerHTML.replace(/\s/g, '');

      if(className.length > 0){ 
        elem.classList.add('aecon-' + className); 
        elem.classList.add('icon');
      }

      this.renderer.setProperty(elem, 'innerHTML', '');
    }
  }
}