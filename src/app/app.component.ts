require('../fonts/Roboto-Thin.ttf');
require('../fonts/RobotoCondensed-Regular.ttf');
import { Component } from '@angular/core';

@Component({
    selector: 'app-component',
    template: require('./app.template.html'),
    styles: [require('./app.css')]
})

export class AppComponent {
  constructor() {

  }
}