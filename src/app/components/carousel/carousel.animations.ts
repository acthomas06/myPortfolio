import { Component,
         trigger,
         state,
         style,
         transition,
         animate,
         keyframes } from '@angular/core';

export const CarouselAnimations = [
    trigger('leftButtonClick', [
        state('clicked', style({transform: 'translateX(105%)'})),
        transition('void => *', 
            animate(300, keyframes([
                style({transform: 'translateX(0)', offset: 0}),
                style({transform: 'translateX(50%)', offset: .5}),
                style({transform: 'translateX(105%)', offset: 1})
            ]))
        )
    ]),
    trigger('rightButtonClick', [
        state('clicked', style({transform: 'translateX(-105%)'})),
        transition('void => *', 
            animate(300, keyframes([
                style({transform: 'translateX(0)', opacity: '1', offset: 0}),
                style({transform: 'translateX(-50%)', opacity: '.5', offset: .5}),
                style({transform: 'translateX(-105%)', opacity: '0', offset: 1})
            ]))
        )
    ])
];