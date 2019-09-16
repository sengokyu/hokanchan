import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      app-loading-indicator {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
      }
    `
  ]
})
export class AppComponent {}
