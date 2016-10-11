import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'about',
    template: require('./about.template.html'),
    styles: [require('./about.less')]
})
export class AboutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}