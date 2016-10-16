import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'carousel',
    template: require('./carousel.template.html'),
    styles: [require('./carousel.css'), require('../content.css')]
})
export class CarouselComponent implements OnInit {
    activatedRoute: ActivatedRoute;
    paramsSub: any;
    constructor(router: Router, activatedRoute: ActivatedRoute) {
        this.activatedRoute = activatedRoute;
    }

    ngOnInit() {
        this.paramsSub = this.activatedRoute.queryParams.subscribe((item) => console.log(item));
        
     }

     ngOnDestroy() {
         
     }
}