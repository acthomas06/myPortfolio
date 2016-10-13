import { Component, 
         OnInit } from '@angular/core';

@Component({
    selector: 'footer-component',
    template: require('./footer.template.html'),
    styles: [require('./footer.css')]
})
export class FooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}