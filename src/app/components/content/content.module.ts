import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CONTENT_ROUTE } from './content.route';

import { ContentComponent }   from './content.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TitleComponent } from '../title/title.component';

@NgModule({
    imports: [BrowserModule, CONTENT_ROUTE],
    exports: [ContentComponent, AboutComponent, ProjectsComponent, ContactComponent, TitleComponent],
    declarations: [ContentComponent, AboutComponent, ProjectsComponent, ContactComponent, TitleComponent],
    providers: [],
})
export class ContentModule { }
