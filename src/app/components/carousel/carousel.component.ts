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
    animations: CarouselAnimations
})
export class CarouselComponent implements OnInit {
    activatedRoute: ActivatedRoute;
    paramsSub: any;
    portfolioService: PortfolioService;
    elem: ElementRef;
    renderer: Renderer;
    isCanAnimate: string = 'page1';
    carouselPages: number;
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
        this.carouselPages = this.portfolioService.getSelectedPortfolioItemPageCount();
    }

    ngOnInit() {
               
    }

    ngOnDestroy() {
        
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
        if (this.i < (this.portfolioService.getSelectedPortfolioItemPageCount() - 1)) {
            this.i++;
            this.isCanAnimate = this.carouselStates[this.i];            
        } else {
            return false;
        }
    }

    resetPage() {
        this.i = 0;
        this.isCanAnimate = 'page1';
    }
}