import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import 'rxjs/Rx'; // load the full rxjs

import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-component',
    templateUrl: 'app/src/app.template.html',
    directives: [ROUTER_DIRECTIVES, HeaderComponent, ContentComponent],
    providers: [
      HTTP_PROVIDERS,
      ROUTER_PROVIDERS
    ]
})
@Routes([
    
])
export class AppComponent {}