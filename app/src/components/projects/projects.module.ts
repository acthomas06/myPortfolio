import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ProjectsComponent }   from './projects.component';

@NgModule({
    imports: [CommonModule,
              BrowserModule
              ],
    exports: [ProjectsComponent],
    declarations: [ProjectsComponent],
    providers: [],
})
export class ProjectsModule { }
