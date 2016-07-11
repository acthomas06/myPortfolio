import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx'; // load the full rxjs

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { TitleComponent } from './components/title/title.component';

@Component({
    selector: 'app-component',
    templateUrl: 'app/src/app.template.html',
    directives: [HeaderComponent,
                 FooterComponent, 
                 ProjectsComponent, 
                 AboutComponent, 
                 ContactComponent,
                 TitleComponent],
    styles: [String(require('./app.less'))],
    providers: [HTTP_PROVIDERS]
})

export class AppComponent {
  constructor() {

  }
}