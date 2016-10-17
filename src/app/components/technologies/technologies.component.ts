import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'technologies',
    template: require('./technologies.template.html'),
    styles: [require('./technologies.css'), require('../content.css')]
})
export class TechnologiesComponent implements OnInit, OnDestroy {
    constructor() { }

    technologyImages:Array<Object> = [
        {name: "angular_shield", height: 120, width: 120},
        {name: "react_logo", height: 100, width: 200}, 
        {name: "es6_logo", height: 120, width: 120},
        {name: "webpack_logo", height: 150, width: 180},
        {name: "nodejs_logo", height: 100, width: 180},
        {name: "MySQL", height: 100, width: 150}        
    ];

    ngOnInit() { }

    ngOnDestroy() { }
}