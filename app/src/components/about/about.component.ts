import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: 'app/src/components/about/about.template.html',
    styles: [String(require('./about.less')), String(require('../content.less'))]
})
export class AboutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}