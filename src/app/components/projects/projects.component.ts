require('../../../assets/persogenics_dashboard.png');
require('../../../assets/persogenics_employee_list.png');
require('../../../assets/persogenics_account_profile.png');
require('../../../assets/navigation_hamburger_expanded.png');
require('../../../assets/navigation_meganav_closed.png');
require('../../../assets/navigation_meganav_expanded.png');
require('../../../assets/navigation_megatilenav_closed.png');
require('../../../assets/navigation_megatilenav_expanded.png');

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'projects',
    template: require('./projects.template.html'),
    styles: [require('./projects.css'), require('../content.css')]
})
export class ProjectsComponent implements OnInit, OnDestroy {
    constructor() { }

    portfolioImages:Array<Object> = [
        {
            "page_one": [
                {url: "persogenics_dashboard", name: "persogenics_logo"},
                {url: "persogenics_employee_list", name: "persogenics_logo"},
                {url: "persogenics_account_profile", name: "persogenics_logo"},
                {url: "navigation_hamburger_expanded", name: "workfront_logo"},
            ]
        },
        {
            "page_two": [
                {url: "navigation_meganav_closed", name: "workfront_logo"},
                {url: "navigation_meganav_expanded", name: "workfront_logo"},
                {url: "navigation_megatilenav_closed", name: "workfront_logo"},
                {url: "navigation_megatilenav_expanded", name: "workfront_logo"},
            ]
        },
        {
            "page_three": [
                {url: "tutapp_hero", name: "tutapp_logo"},
                {url: "tutapp_left_iphone", name: "tutapp_logo"},
                {url: "tutapp_right_iphone", name: "tutapp_logo"},
                {url: "tutapp_footer", name: "tutapp_logo"}
            ]
        }              
    ];

    ngOnInit() { }

    ngOnDestroy() { }
}