import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LOADING_INDICATOR_INTERCEPTOR_PROVIDERS } from './loading-indicator.interceptor';
import { LoadingIndicatorService } from './loading-indicator.service';

@Component({ template: '' })
class FakeComponent {
  constructor(private http: HttpClient) {}

  invokeGetMethod(): void {
    this.http.get('/dummy-url').subscribe();
  }
}

describe('LoadingIndicatorInterceptor', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    const loadingService = jasmine.createSpyObj<LoadingIndicatorService>([
      'show',
      'hide'
    ]);

    TestBed.configureTestingModule({
      declarations: [FakeComponent],
      imports: [HttpClientTestingModule, MatSnackBarModule],
      providers: [
        { provide: LoadingIndicatorService, useValue: loadingService },
        LOADING_INDICATOR_INTERCEPTOR_PROVIDERS
      ]
    }).compileComponents();

    httpMock = TestBed.get(HttpTestingController);
  });

  it('リクエスト時にshowが呼ばれ、レスポンス時にhideが呼ばれる', () => {
    // given
    const fixture = TestBed.createComponent(FakeComponent);
    const component = fixture.componentInstance;
    const loadingService: jasmine.SpyObj<LoadingIndicatorService> = TestBed.get(
      LoadingIndicatorService
    );

    // When
    component.invokeGetMethod();

    // Then
    expect(loadingService.show).toHaveBeenCalled();

    // When
    httpMock.expectOne('/dummy-url').flush({});

    // Then
    expect(loadingService.hide).toHaveBeenCalled();
  });
});
