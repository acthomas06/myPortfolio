import { Component, 
         OnInit,
         ViewChild } from '@angular/core';
import { Router, 
         ActivatedRoute } from '@angular/router';

import { CarouselComponent } from '../carousel/carousel.component';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
    selector: 'portfolio',
    template: require('./portfolio.template.html'),
    styles: [require('./portfolio.css'), require('../content.css')]
})

export class PortfolioComponent implements OnInit {
    router: Router;
    route: ActivatedRoute;
    portfolioService: PortfolioService;

    selectedCategory: string = 'projects';
    portfolio:Array<string> = ["projects", "experience", "technologies"];

    constructor(router: Router, route: ActivatedRoute, portfolioService: PortfolioService) {
        this.router = router;
        this.route = route;
        this.portfolioService = portfolioService;
     }

    @ViewChild(CarouselComponent)
    private carouselComponent: CarouselComponent;

    ngOnInit() {
        this.portfolioService.setPortfolioItem(this.selectedCategory);
    }

    selectCategory(item: string) {
        this.selectedCategory = item;
        this.carouselComponent.resetPage();
        this.portfolioService.setPortfolioItem(item);
    }

    ngOnDestroy() { }
}