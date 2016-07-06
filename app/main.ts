import { enableProdMode } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { APP_ROUTER_PROVIDERS } from './src/app.routes';
import { AppComponent } from './src/app.component';

import './src/img/images';
import './src/fonts/Roboto-Thin.ttf';

if (process.env.ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [])
    .catch(error => console.log(error));
