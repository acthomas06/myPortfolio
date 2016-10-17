import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CarouselComponent }   from './carousel.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ExperienceComponent } from '../experience/experience.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { ScrollBtnLeft } from '../misc/scrollbuttonleft.component';
import { ScrollBtnRight } from '../misc/scrollbuttonright.component';
import { PreviewDirective } from '../../directives/preview.directive';

import { PortfolioService } from '../../services/portfolio.service';

@NgModule({
    imports: [
        BrowserModule
    ],
    exports: [
        CarouselComponent, 
        ProjectsComponent, 
        ExperienceComponent, 
        TechnologiesComponent,
        ScrollBtnLeft,
        ScrollBtnRight, 
        PreviewDirective
    ],
    declarations: [
        CarouselComponent, 
        ProjectsComponent, 
        ExperienceComponent, 
        TechnologiesComponent,
        ScrollBtnLeft,
        ScrollBtnRight, 
        PreviewDirective
    ],
    providers: [PortfolioService],
})
export class CarouselModule { }
