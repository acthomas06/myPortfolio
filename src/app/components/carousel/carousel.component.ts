import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
    selector: 'carousel',
    template: require('./carousel.template.html'),
    styles: [require('./carousel.css'), require('../content.css')]
})
export class CarouselComponent implements OnInit {
    activatedRoute: ActivatedRoute;
    paramsSub: any;
    portfolioService: PortfolioService;

    constructor(router: Router, 
                activatedRoute: ActivatedRoute,
                portfolioService: PortfolioService) {
        this.activatedRoute = activatedRoute;
        this.portfolioService = portfolioService;
    }

    ngOnInit() {
               
    }

    ngOnDestroy() {
        
    }

    getSelectedPortfolioItem(): string {
        return this.portfolioService.getSelectedPortfolioItem();
    }
}