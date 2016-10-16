import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from '../projects/projects.component';
import { ExperienceComponent } from '../experience/experience.component';
import { TechnologiesComponent } from '../technologies/technologies.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'technologies', component: TechnologiesComponent }
];

export const PORTFOLIO_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
