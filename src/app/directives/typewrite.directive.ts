import { Directive, ElementRef, Input, Output, EventEmitter, HostListener, Renderer } from '@angular/core';
import { TypeWriterService } from '../services/typewriter.service';

@Directive({
    selector: '[typewrite]'
})

export class TypewriteDirective {
    el: ElementRef;
    _defaultString: string = 'Hi, my name is Andrew Thomas';
    typeWriter: TypeWriterService;
    render: Renderer;
    constructor(elem: ElementRef, typeWriterService: TypeWriterService, renderer: Renderer) {
        this.el = elem;
        this.typeWriter = typeWriterService;
        this.render = renderer;
    }

    @Input('typewrite') myTypewrite: string;

    @HostListener('window:load', ['$event']) 
    handleOnShowEvent(e) {
        this.typeWrite(this.myTypewrite || this._defaultString, 0);
    }

    typeWrite(text: string, i: number) {
        if (i < text.length) {
            this.el.nativeElement.innerHTML += text[i];
            i++;
            setTimeout(() => {
                this.typeWrite(text, i);
            }, 200);
        }
    }
}