import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PORTFOLIO_ROUTES } from './portfolio.routes';

//Components & Directives
import { PortfolioComponent } from './portfolio.component';
import { PreviewDirective } from '../../directives/preview.directive';
import { ProjectsComponent } from '../projects/projects.component';
import { ExperienceComponent } from '../experience/experience.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { CarouselComponent } from '../carousel/carousel.component';

@NgModule({
    imports: [
        BrowserModule, 
        RouterModule
    ],
    exports: [
        PortfolioComponent, 
        PreviewDirective, 
        ProjectsComponent, 
        ExperienceComponent, 
        TechnologiesComponent, 
        CarouselComponent
    ],
    declarations: [
        PortfolioComponent, 
        PreviewDirective, 
        ProjectsComponent, 
        ExperienceComponent, 
        TechnologiesComponent, 
        CarouselComponent
    ],
    providers: [],
})  
export class PortfolioModule { }
