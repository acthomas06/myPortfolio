import { Component, 
         OnInit } from '@angular/core';

@Component({
    selector: 'footer-component',
    templateUrl: 'app/src/components/footer/footer.template.html',
    styles: [String(require('./footer.less'))]
})
export class FooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}