import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[controlAction]'
})

export class ActionDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }

    @HostListener('mouseenter') onMouseEnter() {
        console.log(this, 'mouseenter');
    }

    @HostListener('mouseleave') onMouseLeave() {
        console.log(this, 'mouseleave');
    }
}