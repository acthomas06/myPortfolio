import { Component, 
         OnInit } from '@angular/core';

@Component({
    selector: 'header-component',
    templateUrl: 'app/src/components/header/header.template.html',
    styles: [String(require('./header.less'))]
})
export class HeaderComponent implements OnInit {
    navItems:Array<string> = ["About", "Projects", "Contact"];

    constructor() { }

    ngOnInit() { 

    }

    changeLocation(location:string) {

    }
}