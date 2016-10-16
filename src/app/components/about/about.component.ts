import { Component, OnInit } from '@angular/core';
import { TypeWriterService } from '../../services/typewriter.service';

@Component({
    selector: 'about',
    template: require('./about.template.html'),
    styles: [require('./about.css'), require('../content.css')]
})
export class AboutComponent implements OnInit {
    saidHi: boolean = false;
    introduced: boolean = false;
    typeWriter: TypeWriterService;
    showTypeWrite: boolean = false;
    
    constructor(typeWriterService: TypeWriterService) {
        this.typeWriter = typeWriterService;
     }
    
    isAnimationFinished(item: string) {
        this.typeWriter.getTypeWriterChangeEmitter().subscribe((data) => {
            return (data.value == item);
        });
    }

    ngOnInit() {
        this.showTypeWrite = true;
    }
}