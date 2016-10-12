import { NgModule } from '@angular/core';

import { ContentComponent }   from './content.component';
import { ContactModule } from '../contact/contact.module';
import { AboutModule } from '../about/about.module';
import { ProjectsModule } from '../projects/projects.module';
import { TitleModule } from '../title/title.module';

@NgModule({
    imports: [AboutModule, ProjectsModule, ContactModule, TitleModule],
    exports: [ContentComponent, AboutModule, ProjectsModule, ContactModule, TitleModule],
    declarations: [ContentComponent],
    providers: [],
})
export class ContentModule { }
