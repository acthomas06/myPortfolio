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

    // @Output() canAnimateLeft = new EventEmitter();

    // @HostListener('click', ['$event'])
    // onClick() {
    //     this.scrollLeft();
    // } 

    // scrollLeft() {
        
    //     let scrollContainer = this.elem.nativeElement.parentNode.querySelector('.project-container');
    //     let marginValue = Number(scrollContainer.style.marginLeft);
    //     let scrollContainerWidth = parseInt(scrollContainer.offsetWidth);
    //     // console.log(marginValue);
    //     // console.log(scrollContainerWidth);

    //     // if (!marginValue) {
    //     //     marginValue = Number(scrollContainer.style.marginLeft);
    //     // }
    //     // if (marginValue <= 0) {
    //         // this.renderer.invokeElementMethod(
    //         //     scrollContainer,
    //         //     'animate',                
    //         //     [
    //         //         [
    //         //             {marginLeft: (marginValue + 'px')},
    //         //             {marginLeft: (scrollContainerWidth + 'px')}
    //         //         ]
    //         //     ]
    //         // );
    //         this.canAnimateLeft.emit('left-clicked');
    //         // this.renderer.setElementStyle(scrollContainer, 'margin-left', ((marginValue + 210).toString()) + '%');
    //     // } else {
    //     //     this.canAnimateLeft.emit(false);
    //     // }
    // }
}