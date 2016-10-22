import { Directive, ElementRef, Input, Output, EventEmitter, HostListener, Renderer } from '@angular/core';


@Directive({
    selector: '[highlightAttr]'
})

export class HighlightDirective {
    renderer: Renderer;
    el: ElementRef;
    _defaultValue: string;

    constructor(elem: ElementRef, renderer: Renderer) {
        this.renderer = renderer;
        this.el = elem;
    }

    @Input('attrValue') highlightAttrValue: string;

    @Input('highlightAttr') highlightAttribute: string;

    @HostListener('mouseenter')
    onMouseEnter() {
        console.log('mouseenter');
        this.highlight(this.highlightAttribute, this.highlightAttrValue);
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        console.log('mouseleave');
        this.highlight(this.highlightAttribute, null);
    }

    private highlight(property: string, amount: string) {
        
    }
}