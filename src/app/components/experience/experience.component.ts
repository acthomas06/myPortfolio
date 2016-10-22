require('../../../assets/persogenics_logo.png');
require('../../../assets/workfront_logo.png');
require('../../../assets/insidesales_logo.png');
require('../../../assets/devmountain_logo.png');
require('../../../assets/tutapp_logo.png');

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'experience',
    template: require('./experience.template.html'),
    styles: [require('./experience.css'), require('../content.css')]
})
export class ExperienceComponent implements OnInit, OnDestroy {
    route: ActivatedRoute;
    constructor(route: ActivatedRoute) {
        this.route = route;
     }

    experienceImages:Array<Object> = [
        {name: "persogenics_logo", height: 35, url: "http://www.persogenics.com"},
        {name: "workfront_logo", height: 45, url: "https://www.workfront.com"},
        {name: "insidesales_logo", height: 65, url: "https://www.insidesales.com"},
        {name: "devmountain_logo", height: 50, url: "https://www.devmountain.com"},
        {name: "tutapp_logo", height: 35, url: "http://www.tutoring-app.com"}
    ];

    ngOnInit() {}

    ngOnDestroy() { }
}