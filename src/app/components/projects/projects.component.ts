import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'projects',
    template: require('./projects.template.html'),
    styles: [require('./projects.css'), require('../content.css')]
})
export class ProjectsComponent implements OnInit {
    constructor() { }

    portfolioImages:Array<Object> = [
        {url: "persogenics_dashboard", name: "persogenics_logo"},
        {url: "persogenics_employee_list", name: "persogenics_logo"},
        {url: "persogenics_account_profile", name: "persogenics_logo"},
        {url: "navigation_hamburger_expanded", name: "workfront_logo"},
        {url: "navigation_meganav_closed", name: "workfront_logo"},
        {url: "navigation_meganav_expanded", name: "workfront_logo"},
        {url: "navigation_megatilenav_closed", name: "workfront_logo"},
        {url: "navigation_megatilenav_expanded", name: "workfront_logo"}
    ];

    ngOnInit() { }

    ngOnDestroy() {
        
    }
}