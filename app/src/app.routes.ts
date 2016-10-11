import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    {path: '', component: AppComponent}
];

export const APP_ROUTER_PROVIDERS: ModuleWithProviders = RouterModule.forRoot(routes);