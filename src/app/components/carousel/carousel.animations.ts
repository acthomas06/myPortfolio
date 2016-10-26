import { Component,
         trigger,
         state,
         style,
         transition,
         animate,
         keyframes } from '@angular/core';

export const CarouselAnimations = [
    trigger('animateCarousel', [
        state('page1', style({transform: 'translateX(0%)'})),
        state('page2', style({transform: 'translateX(-28.5%)'})),
        state('page3', style({transform: 'translateX(-57%)'})),
        transition('* => page2', animate('600ms ease-in', style({transform: 'translateX(-28.5%)'}))),
        transition('page1 => page2', [
            animate('600ms ease-in', keyframes([
                style({transform: 'translateX(-9%)', offset: 0}),
                style({transform: 'translateX(-18%)', offset: 0.5}),
                style({transform: 'translateX(-28.5%)', offset: 1.0})
            ]))
        ]),
        transition('page2 => page1', [
            animate('600ms ease-in', keyframes([
                style({transform: 'translateX(-18%)', offset: 0}),
                style({transform: 'translateX(-9%)', offset: 0.5}),
                style({transform: 'translateX(0%)', offset: 1.0})
            ]))
        ]),
        transition('page2 => page3', [
            animate('600ms ease-in', keyframes([
                style({transform: 'translateX(-37.5%)', offset: 0}),
                style({transform: 'translateX(-49%)', offset: 0.5}),
                style({transform: 'translateX(-57%)', offset: 1.0})
            ]))
        ]),
        transition('page3 => page2', [
            animate('600ms ease-in', keyframes([
                style({transform: 'translateX(-49%%)', offset: 0}),
                style({transform: 'translateX(-37.5%)', offset: 0.5}),
                style({transform: 'translateX(-28.5%)', offset: 1.0})
            ]))
        ])
    ])
];