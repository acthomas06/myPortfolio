import { Component, 
         OnInit } from '@angular/core';

@Component({
    selector: 'contact',
    template: require('./contact.template.html'),
    styles: [require('./contact.css'), require('../content.css')]
})

export class ContactComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}