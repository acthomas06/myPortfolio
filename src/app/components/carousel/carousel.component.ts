import { Component, OnInit, HostListener, ElementRef, Renderer,
         trigger,
         state,
         style,
         transition,
         animate,
         keyframes } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';
import { CarouselAnimations } from './carousel.animations';

@Component({
    selector: 'carousel',
    template: require('./carousel.template.html'),
    styles: [require('./carousel.css'), require('../content.css')],
    animations: [
            trigger('animateCarousel', [
            state('page1', style({transform: 'translateX(0%)'})),
            state('page2', style({transform: 'translateX(-28.5%)'})),
            state('page3', style({transform: 'translateX(-57%)'})),
            transition('* => page2', animate('600ms ease-in', style({transform: 'translateX(-28.5%)'}))),
            transition('page1 => page2', [
                animate('600ms ease-in', keyframes([
                    style({transform: 'translateX(0%)', offset: 0}),
                    style({transform: 'translateX(-18%)', offset: 0.5}),
                    style({transform: 'translateX(-28.5%)', offset: 1.0})
                ]))
            ]),
            transition('page2 => page1', [
                animate('600ms ease-in', keyframes([
                    style({transform: 'translateX(-28.5%)', offset: 0}),
                    style({transform: 'translateX(-18%)', offset: 0.5}),
                    style({transform: 'translateX(0%)', offset: 1.0})
                ]))
            ]),
            transition('page2 => page3', [
                animate('600ms ease-in', keyframes([
                    style({transform: 'translateX(-28.5%)', offset: 0}),
                    style({transform: 'translateX(-49%)', offset: 0.5}),
                    style({transform: 'translateX(-57%)', offset: 1.0})
                ]))
            ]),
            transition('page3 => page2', [
                animate('600ms ease-in', keyframes([
                    style({transform: 'translateX(-57%%)', offset: 0}),
                    style({transform: 'translateX(-37.5%)', offset: 0.5}),
                    style({transform: 'translateX(-28.5%)', offset: 1.0})
                ]))
            ])
        ])
    ]
})
export class CarouselComponent implements OnInit {
    activatedRoute: ActivatedRoute;
    paramsSub: any;
    portfolioService: PortfolioService;
    elem: ElementRef;
    renderer: Renderer;
    isCanAnimate: string;
    carouselStates: Array<string> = ['page1', 'page2', 'page3'];
    i: number = 0;

    constructor(router: Router, 
                activatedRoute: ActivatedRoute,
                portfolioService: PortfolioService,
                elem: ElementRef,
                renderer: Renderer) {
        this.activatedRoute = activatedRoute;
        this.portfolioService = portfolioService;
        this.elem = elem;
        this.renderer = renderer;
    }

    @HostListener('mouseenter', ['$event'])
    onMouseEnter() {
        this.renderer.setElementStyle(this.elem.nativeElement.querySelector('.arrow-box.left'), 'display', 'block');
        this.renderer.setElementStyle(this.elem.nativeElement.querySelector('.arrow-box.right'), 'display', 'block');
    }

    @HostListener('mouseleave', ['$event'])
    onMouseLeave() {
        this.renderer.setElementStyle(this.elem.nativeElement.querySelector('.arrow-box.left'), 'display', 'none');
        this.renderer.setElementStyle(this.elem.nativeElement.querySelector('.arrow-box.right'), 'display', 'none');
    }

    ngOnInit() {
               
    }

    ngOnDestroy() {
        
    }

    getSelectedPortfolioItem(): string {
        return this.portfolioService.getSelectedPortfolioItem();
    }

    animateLeft() {
        if (this.i != 0) {
            this.i--;
            this.isCanAnimate = this.carouselStates[this.i];           
        } else {
            return false;
        }
    }

    animateRight() {
        if (this.i < this.carouselStates.length-1) {
            this.i++;
            this.isCanAnimate = this.carouselStates[this.i];            
        } else {
            return false;
        }
    }

    animationStarted(ev) {
        // console.log(ev);
    }

    animationFinished(ev) {
        // console.log(ev);
    }
}