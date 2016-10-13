import { Component, 
         OnInit } from '@angular/core';

@Component({
    selector: 'header-component',
    template: require('./header.template.html'),
    styles: [require('./header.css'), require('../content.css')]
})
export class HeaderComponent implements OnInit {
    navItems:Array<string> = ["About", "Projects", "Contact"];

    constructor() { }

    ngOnInit() { 

    }

    changeLocation(location:string) {

    }
}