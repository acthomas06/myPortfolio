import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'content-component',
    template: require('./content.template.html'),
    styles: [require('./content.css')]
})
export class ContentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}