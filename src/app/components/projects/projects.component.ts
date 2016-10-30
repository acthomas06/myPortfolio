require('../../../assets/persogenics_dashboard.png');
require('../../../assets/persogenics_employee_list.png');
require('../../../assets/persogenics_account_profile.png');
require('../../../assets/navigation_hamburger_expanded.png');
require('../../../assets/navigation_meganav_closed.png');
require('../../../assets/navigation_meganav_expanded.png');
require('../../../assets/navigation_megatilenav_closed.png');
require('../../../assets/navigation_megatilenav_expanded.png');

import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
    selector: 'projects',
    template: require('./projects.template.html'),
    styles: [require('./projects.css'), require('../content.css')]
})
export class ProjectsComponent implements OnInit, OnDestroy {
    portfolioService: PortfolioService;
    projectsItems: Array<Object>;

    constructor(portfolioService:PortfolioService) {
        this.portfolioService = portfolioService;
        this.projectsItems = this.portfolioService.getProjectsImages();
     }

    ngOnInit() { }

    ngOnDestroy() { }
    
}