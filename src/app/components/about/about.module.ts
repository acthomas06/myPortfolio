import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AboutComponent }   from './about.component';
import { TypewriteDirective } from '../../directives/typewrite.directive';

import { TypeWriterService } from '../../services/typewriter.service';

@NgModule({
    imports: [BrowserModule],
    exports: [AboutComponent, TypewriteDirective],
    declarations: [AboutComponent, TypewriteDirective],
    providers: [TypeWriterService],
})
export class AboutModule { }
