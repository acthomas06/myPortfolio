import { Component, 
         OnInit } from '@angular/core';

@Component({
    selector: 'projects',
    templateUrl: 'app/src/components/projects/projects.template.html',
    styles: [String(require('./projects.less')), String(require('../content.less'))]
})

export class ProjectsComponent implements OnInit {
    experience:Array<string> = ["Projects", "Experience", "Technologies"];
    selectedCategory:string = 'Projects';
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
        {url: "persogenics_account_profile"}
    ];

    experienceImages:Array<Object> = [
        {name: "persogenics_logo", height: 40},
        {name: "workfront_logo", height: 50},
        {name: "insidesales_logo", height: 65},
        {name: "devmountain_logo", height: 60}
    ];

    constructor() { }

    ngOnInit() { }

    selectCategory(item:string) {
        this.selectedCategory = item;
    }
}