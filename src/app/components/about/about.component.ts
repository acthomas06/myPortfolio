import { Component, OnInit } from '@angular/core';
import { TypeWriterService } from '../../services/typewriter.service';

@Component({
    selector: 'about',
    template: require('./about.template.html'),
    styles: [require('./about.css'), require('../content.css')]
})
export class AboutComponent implements OnInit {
    typeWriter: TypeWriterService;
    animationFinished: boolean;
    showTypeWrite: boolean = false;
    blurb: string = "I'm a web developer from Lehi, Utah.  I specialize in Angular, Angular 2, and React Javascript frameworks.  Check out my Portfolio section to see past projects and experience!";

    constructor(typeWriterService: TypeWriterService) {
        this.typeWriter = typeWriterService;
     }
    
    isAnimationFinished(ev) {        
        this.animationFinished = ev;       

        return ev;
    }

    ngOnInit() {
        this.showTypeWrite = true;
    }
}