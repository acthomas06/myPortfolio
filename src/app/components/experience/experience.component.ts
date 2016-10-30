require('../../../assets/persogenics_logo.png');
require('../../../assets/workfront_logo.png');
require('../../../assets/insidesales_logo.png');
require('../../../assets/devmountain_logo.png');
require('../../../assets/tutapp_logo.png');

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
    selector: 'experience',
    template: require('./experience.template.html'),
    styles: [require('./experience.css'), require('../content.css')]
})
export class ExperienceComponent implements OnInit, OnDestroy {
    route: ActivatedRoute;
    portfolioService: PortfolioService;
    experienceItems: Array<Object>;

    constructor(route: ActivatedRoute, portfolioService: PortfolioService) {
        this.route = route;
        this.portfolioService = portfolioService;
        this.experienceItems = this.portfolioService.getExperienceImages();
     }

    ngOnInit() {}

    ngOnDestroy() {}
}