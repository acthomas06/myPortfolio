import { Directive, ElementRef, Input, Output, EventEmitter, HostListener, Renderer } from '@angular/core';


@Directive({
    selector: '[preview]'
})

export class PreviewDirective {
    renderer: Renderer;
    el: ElementRef;
    constructor(renderer: Renderer, elem: ElementRef) {
        this.renderer = renderer;
        this.el = elem;
    }

    @Input() preview: string;

    @HostListener('click', ['$event'])
    onClick(ev) {
        this.openPreview(this.preview);
    }

    openPreview(url: string) {
        let imageUrl = './assets/' + url + '.png';
        let rootElem = this.el.nativeElement.parentNode;
        let parentElem = this.renderer.createElement(rootElem, 'div');
        let previewElem = this.renderer.createElement(rootElem, 'div');
        let imageElem = this.renderer.createElement(previewElem, 'img');

        if (parentElem) {
            parentElem.classList += 'preview-overlay';
        }

        if (previewElem) {
            previewElem.classList += 'preview-container';
        }

        if (imageElem) {
            imageElem.classList += 'preview-image';
            imageElem.src = imageUrl;
            console.log(imageElem.src)
        }

        this.renderer.listen(parentElem, 'click', (ev) => {
            parentElem.remove();
            previewElem.remove();
            // this.renderer.setElementProperty(parentElem, 'display', 'none');
        });
        
    }
}