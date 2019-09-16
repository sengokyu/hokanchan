import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoadingIndicatorService } from './loading-indicator.service';

@Injectable()
export class LoadingIndicatorInterceptor implements HttpInterceptor {
  constructor(private loading: LoadingIndicatorService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loading.show();

    return next.handle(req).pipe(
      tap(
        event => {
          if (event.type === HttpEventType.Response) {
            this.loading.hide();
          }
        },
        () => this.loading.hide()
      )
    );
  }
}

export const LOADING_INDICATOR_INTERCEPTOR_PROVIDERS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingIndicatorInterceptor,
    multi: true,
    deps: [LoadingIndicatorService]
  }
];
