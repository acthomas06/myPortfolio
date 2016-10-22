import { Component, OnInit, HostListener, ElementRef, Renderer } from '@angular/core';
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
    isRightAnimate: boolean;
    isLeftAnimate: boolean;
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

    leftAnimate(ev) {
        this.isLeftAnimate = ev;
    }

    rightAnimate(ev) {
        this.isRightAnimate = ev;
    }
}