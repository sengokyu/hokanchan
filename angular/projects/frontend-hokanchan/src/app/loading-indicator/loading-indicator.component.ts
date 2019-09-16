import { Component } from '@angular/core';
import { LoadingIndicatorService } from './loading-indicator.service';

@Component({
  selector: 'app-loading-indicator',
  template: `
    <mat-progress-bar
      color="accent"
      mode="indeterminate"
      [style.visibility]="(loading.visibility$ | async) ? 'visible' : 'hidden'"
    ></mat-progress-bar>
  `
})
export class LoadingIndicatorComponent {
  constructor(public loading: LoadingIndicatorService) {}
}
