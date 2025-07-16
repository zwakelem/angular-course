import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighighted: boolean = false;

  @Output()
  toggleHighlight = new EventEmitter();

  constructor() {
    console.log('Directive created ...');
  }

  // @HostBinding('className')
  // get cssClasses() {
  //   return 'highlighted';
  // }

  // achieves same as above
  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighighted;
  }

  // @HostBinding('style.border')
  // get cssClasses() {
  //   return "1px solid red";
  // }

  @HostBinding('attr.disabled')
  get disabled() {
    return "true";
  }

  @HostListener('mouseover', ['$event'])
  mouseOver($event) {
    console.log($event);
    this.isHighighted = true;
    this.toggleHighlight.emit(this.isHighighted);
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighighted = false;
    this.toggleHighlight.emit(this.isHighighted);
  }

  toggle() {
    this.isHighighted = !this.isHighighted;
  }


}
