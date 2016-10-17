import { Component,
         OnInit,
         Input,
         trigger,
         state,
         style,
         transition,
         animate,
         keyframes } from '@angular/core';

let value = 0;
export const CarouselAnimations = [
    trigger('animateLeft', [
        state('true', style({
            marginLeft: (value + 210) + '%'
        })),
        transition('void <=> *', animate('500ms ease-in'))
    ]),
    trigger('animateRight', [
        state('true', style({
            marginLeft: (value - 210) + '%'
        })),
        transition('void <=> *', animate('500ms ease-in'))
    ])
];