import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'content-commponent',
    templateUrl: 'app/src/components/content/content.template.html',
    styles: [require('./content.less')]
})
export class ContentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}