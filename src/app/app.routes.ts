import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './components/content/content.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';

const routes: Routes = [
    {path: '', redirectTo: 'home/projects', pathMatch: 'full'},
    {path: 'home', component: ContentComponent, children: [
        {path: 'projects', component: ProjectsComponent},
        {path: 'experience', component: ExperienceComponent},
        {path: 'technologies', component: TechnologiesComponent}
    ]}
];

export const APP_ROUTER_PROVIDERS: ModuleWithProviders = RouterModule.forRoot(routes);