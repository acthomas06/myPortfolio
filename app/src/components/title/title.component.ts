import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'title-component',
    template: require('./title.template.html'),
    styles: [require('./title.less')]
})

export class TitleComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}