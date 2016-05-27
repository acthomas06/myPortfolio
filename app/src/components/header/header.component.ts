import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header-component',
    templateUrl: 'app/src/components/header/header.template.html',
    styles: [require('./header.less')]
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}