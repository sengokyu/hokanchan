import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

declare var ga: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  constructor(private router: Router) {}

  public sendCurrentLocation(): void {
    if (!this.isAvailable()) {
      return;
    }

    ga('send', { hitType: 'pageview', page: this.router.url });
  }

  private isAvailable(): boolean {
    return window && typeof window['ga'] !== undefined;
  }
}
