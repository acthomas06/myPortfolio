//Components
import { AppComponent } from './src/app.component';

//Modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UniversalModule } from 'angular2-universal';
import { RouterModule } from '@angular/router';
import { AboutModule } from './src/components/about/about.module';
import { ContactModule } from './src/components/contact/contact.module';
import { FooterModule } from './src/components/footer/footer.module';
import { HeaderModule } from './src/components/header/header.module';
import { ProjectsModule } from './src/components/projects/projects.module';
import { TitleModule } from './src/components/title/title.module';

//Providers
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { APP_ROUTER_PROVIDERS } from './src/app.routes';

@NgModule({
    imports: [
        BrowserModule,
        UniversalModule,
        RouterModule,
        AboutModule,
        ContactModule,
        FooterModule,
        HeaderModule,
        ProjectsModule,
        TitleModule,
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
