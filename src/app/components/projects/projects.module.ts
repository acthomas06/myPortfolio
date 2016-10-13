import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { ProjectsComponent }   from './projects.component';

@NgModule({
    imports: [CommonModule,
              BrowserModule,
              MaterialModule.forRoot()
              ],
    exports: [ProjectsComponent],
    declarations: [ProjectsComponent],
    providers: [],
})
export class ProjectsModule { }
