import { Component, 
         OnInit } from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: 'app/src/components/contact/contact.template.html',
    styles: [String(require('./contact.less')), String(require('../content.less'))]
})

export class ContactComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}