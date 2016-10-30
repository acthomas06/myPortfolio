import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
    selector: 'technologies',
    template: require('./technologies.template.html'),
    styles: [require('./technologies.css'), require('../content.css')]
})
export class TechnologiesComponent implements OnInit, OnDestroy {
    portfolioService: PortfolioService;
    technologyItems: Array<Object>;

    constructor(portfolioService: PortfolioService) {
        this.portfolioService = portfolioService;
        this.technologyItems = this.portfolioService.getTechnologyImages();
     }

    ngOnInit() { }

    ngOnDestroy() { }
}