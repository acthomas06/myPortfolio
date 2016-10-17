import { Component, ElementRef, Input, Output, EventEmitter, HostListener, Renderer } from '@angular/core';


@Component({
    selector: 'scrollBtnRight',
    template: `
    <div class="right arrow-container">
        <div class="arrow-box right">
            <img class="right-arrow" src="./assets/right-arrow-button.svg"/>
        </div>
    </div>
    `,
    styles: [require('./scrollbutton.css')]
})

export class ScrollBtnRight {
    elem: ElementRef;
    renderer: Renderer;
    constructor(elem: ElementRef, renderer: Renderer) {
        this.elem = elem;
        this.renderer = renderer;
    }

    @Output() canAnimateRight = new EventEmitter();

    @HostListener('click', ['$event'])
    onClick() {
        this.scrollRight();
    } 

    scrollRight() {
        let scrollContainer = this.elem.nativeElement.parentNode.querySelector('.tile-container');
        let marginValue = parseInt(scrollContainer.style.marginLeft);
        
        if (marginValue > (-420)) {
            // this.renderer.animate(
            //     scrollContainer,
            //     {
            //         styles: [
            //             {'margin-left': 0}
            //         ]
            //     },
            //     [                    
            //         {
            //             offset: .5,
            //             styles: {
            //                 styles: [
            //                     {'margin-left': '100px'}
            //                 ]
            //             }
            //         },
            //         {
            //             offset: 1,
            //             styles: {
            //                 styles: [
            //                     {'margin-left': '200px'}
            //                 ]
            //             }                        
            //         }                    
            //     ],
            //     500,
            //     .5,
            //     'linear'
            // );
            this.canAnimateRight.emit(true);
            this.renderer.setElementStyle(scrollContainer, 'margin-left', ((marginValue - 210).toString()) + '%');
        } else {
            this.canAnimateRight.emit(false);
        }
    }
}