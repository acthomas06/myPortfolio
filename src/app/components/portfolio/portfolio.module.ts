import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from '../carousel/carousel.module';

//Components & Directives
import { PortfolioComponent } from './portfolio.component';

@NgModule({
    imports: [
        BrowserModule, 
        CarouselModule
    ],
    exports: [
        PortfolioComponent 
    ],
    declarations: [
        PortfolioComponent
    ],
    providers: [],
})  
export class PortfolioModule { }
