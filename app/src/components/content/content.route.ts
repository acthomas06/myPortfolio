import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';

const routes: Routes = [
    {path: 'home', component: ContentComponent}
];

export const CONTENT_ROUTE: ModuleWithProviders = RouterModule.forChild(routes);