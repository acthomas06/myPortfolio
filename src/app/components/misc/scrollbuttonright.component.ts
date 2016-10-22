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
        let scrollContainer = this.elem.nativeElement.parentNode.querySelector('.project-container');
        let marginValue = scrollContainer.style.marginLeft;
        let scrollContainerWidth = scrollContainer.offsetWidth;
        marginValue = parseInt(marginValue, 10);

        // if (!marginValue) {
        //     marginValue = Number(scrollContainer.style.marginLeft);
        // }
        // console.log(marginValue);
        // console.log(scrollContainerWidth);
        
        // if (marginValue > (-420)) {
            // this.renderer.animate(
            //     scrollContainer,
            //     {
            //         styles: [
            //             {'margin-left': marginValue}
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
            this.canAnimateRight.emit('clicked');
            // this.renderer.setElementStyle(scrollContainer, 'margin-left', (-scrollContainerWidth + 'px'));
        // } else {
        //     this.canAnimateRight.emit(false);
        // }
    }
}