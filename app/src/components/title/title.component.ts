import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'title-component',
    templateUrl: 'app/src/components/title/title.template.html',
    styles: [String(require('./title.less'))]
})

export class TitleComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}