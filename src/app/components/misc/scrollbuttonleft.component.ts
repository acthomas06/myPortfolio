import { Component, ElementRef, Input, Output, EventEmitter, HostListener, Renderer } from '@angular/core';


@Component({
    selector: 'scrollBtnLeft',
    template: `
    <div class="left arrow-container">
        <div class="arrow-box left">
            <img class="left-arrow" src="./assets/left-arrow-button.svg"/>
        </div>
    </div>
    `,
    styles: [require('./scrollbutton.css')]
})

export class ScrollBtnLeft {
    elem: ElementRef;
    renderer: Renderer;
    
    constructor(elem: ElementRef, renderer: Renderer) {
        this.elem = elem;
        this.renderer = renderer;
    }

    @Output() canAnimateLeft = new EventEmitter();

    @HostListener('click', ['$event'])
    onClick() {
        this.scrollLeft();
    } 

    scrollLeft() {
        
        let scrollContainer = this.elem.nativeElement.parentNode.querySelector('.tile-container');
        let marginValue = parseInt(scrollContainer.style.marginLeft);
        
        if (marginValue != 0) {
            // this.renderer.animate(
            //     scrollContainer,
            //     {
            //         styles: [{'marginLeft': marginValue}]
            //     },
            //     [                    
            //         {
            //             offset: .5,
            //             styles: {
            //                 styles: [
            //                     {'marginLeft': marginValue}
            //                 ]
            //             }
            //         },
            //         {
            //             offset: 1,
            //             styles: {
            //                 styles: [
            //                     {'marginLeft': ((marginValue + 210) + '%')}
            //                 ]
            //             }                        
            //         }                    
            //     ],
            //     2,
            //     1,
            //     'linear'
            // );
            this.canAnimateLeft.emit(true);
            this.renderer.setElementStyle(scrollContainer, 'margin-left', ((marginValue + 210).toString()) + '%');
        } else {
            this.canAnimateLeft.emit(false);
        }
    }
}