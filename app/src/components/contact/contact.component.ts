import { Component, 
         OnInit } from '@angular/core';

@Component({
    selector: 'contact',
    template: require('./contact.template.html'),
    styles: [require('./contact.less'), require('../content.less')]
})

export class ContactComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}