import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'technologies',
    template: require('./technologies.template.html'),
    styles: [require('./technologies.css'), require('../content.css')]
})
export class TechnologiesComponent implements OnInit {
    constructor() { }

    technologyImages:Array<Object> = [
        {name: "angular_shield", height: 50, width: 90}, 
        {name: "es6_logo", height: 50, width: 80},
        {name: "webpack_logo", height: 70, width: 150},
        {name: "nodejs_logo", height: 50, width: 150},
        {name: "MySQL", height: 50, width: 140},
        {name: "react_logo", height: 50, width: 150}        
    ];

    ngOnInit() { }

    ngOnDestroy() {
        console.log('technologies destroyed');
    }
}