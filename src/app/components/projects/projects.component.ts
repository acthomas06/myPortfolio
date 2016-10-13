import { Component, 
         OnInit } from '@angular/core';

@Component({
    selector: 'projects',
    template: require('./projects.template.html'),
    styles: [require('./projects.css'), require('../content.css')]
})

export class ProjectsComponent implements OnInit {
    experience:Array<string> = ["PROJECTS", "EXPERIENCE", "TECHNOLOGIES"];
    selectedCategory:string = 'PROJECTS';

    technologyImages:Array<Object> = [
        {name: "angular_shield"}, 
        {name: "es6_logo"}, 
        {name: "javascript_shield"},
        {name: "webpack_logo"},
        {name: "grunt_logo"}, 
        {name: "css_shield"},
        {name: "nodejs_logo"},
        {name: "MySQL"},         
    ];

    projectImages:Array<Object> = [
        {url: "persogenics_dashboard"},
        {url: "persogenics_employee_list"},
        {url: "persogenics_account_profile"},
        {url: "navigation_hamburger_expanded"},
        {url: "navigation_meganav_closed"},
        {url: "navigation_meganav_expanded"},
        {url: "navigation_megatilenav_closed"},
        {url: "navigation_megatilenav_expanded"}
    ];

    experienceImages:Array<Object> = [
        {name: "persogenics_logo", height: 35},
        {name: "workfront_logo", height: 45},
        {name: "insidesales_logo", height: 65},
        {name: "devmountain_logo", height: 60}
    ];

    constructor() { }

    ngOnInit() {  }

    selectCategory(item: string) {
        this.selectedCategory = item;
    }
}