import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'experience',
    template: require('./experience.template.html'),
    styles: [require('./experience.css'), require('../content.css')]
})
export class ExperienceComponent implements OnInit {
    route: ActivatedRoute;
    constructor(route: ActivatedRoute) {
        this.route = route;
     }

    experienceImages:Array<Object> = [
        {name: "persogenics_logo", height: 35, url: "http://www.persogenics.com"},
        {name: "workfront_logo", height: 45, url: "https://www.workfront.com"},
        {name: "insidesales_logo", height: 65, url: "https://www.insidesales.com"},
        {name: "devmountain_logo", height: 60, url: "https://www.devmountain.com"},
        {name: "tutapp_logo", height: 40, url: "http://www.tutoring-app.com"}
    ];

    ngOnInit() {
        console.log(this.route.snapshot.queryParams);
        this.route.params.subscribe((item) => console.log(item));
     }

    ngOnDestroy() {
        console.log('experience destroyed');
    }
}