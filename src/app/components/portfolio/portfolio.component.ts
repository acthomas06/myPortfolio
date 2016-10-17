import { Component, 
         OnInit } from '@angular/core';
import { Router, 
         ActivatedRoute } from '@angular/router';

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

    ngOnInit() {}

    selectCategory(item: string) {
        this.selectedCategory = item;
        
        this.portfolioService.setPortfolioItem(item);
    }

    ngOnDestroy() { }
}