import { Component, 
         OnInit } from '@angular/core';

@Component({
    selector: 'header-component',
    template: require('./header.template.html'),
    styles: [require('./header.css'), require('../content.css')]
})
export class HeaderComponent implements OnInit {
    navItems:Array<string> = ["ABOUT", "PORTFOLIO", "CONTACT"];

    constructor() { }

    ngOnInit() { 

    }

    changeLocation(location:string) {

    }
}