//Components
import { AppComponent } from './app/app.component';

//Modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UniversalModule } from 'angular2-universal';
import { RouterModule } from '@angular/router';
import { FooterModule } from './app/components/footer/footer.module';
import { ContentModule } from './app/components/content/content.module';
import { HeaderModule } from './app/components/header/header.module';

//Providers
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

import { TypewriteDirective } from './app/directives/typewrite.directive';

@NgModule({
    imports: [
        BrowserModule,
        UniversalModule,
        RouterModule,
        FooterModule,
        ContentModule,
        HeaderModule,
        APP_ROUTER_PROVIDERS
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
    ],
    bootstrap: [AppComponent]
})
export class MainModule {}