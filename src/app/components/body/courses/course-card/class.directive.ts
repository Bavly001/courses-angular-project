import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}

  @Input('appClass') set display(value: Object) {
    let entries = Object.entries(value);
    for (let [className, condition] of entries) {
      if (condition)
        this.render.addClass(this.element.nativeElement, className);
    }
  }
}
