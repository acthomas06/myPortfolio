import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AboutModule } from '../about/about.module';
import { PortfolioModule } from '../portfolio/portfolio.module';

import { ContentComponent }   from './content.component';
import { ContactComponent } from '../contact/contact.component';
import { TitleComponent } from '../title/title.component';

@NgModule({
    imports: [
        BrowserModule, 
        AboutModule, 
        PortfolioModule
    ],
    exports: [
        ContentComponent, 
        ContactComponent, 
        TitleComponent
    ],
    declarations: [
        ContentComponent, 
        ContactComponent, 
        TitleComponent
    ],
    providers: [],
})
export class ContentModule { }
