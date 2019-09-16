import { TestBed, fakeAsync } from '@angular/core/testing';

import { LoadingIndicatorService } from './loading-indicator.service';

describe('LoadingIndicatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingIndicatorService = TestBed.get(
      LoadingIndicatorService
    );
    expect(service).toBeTruthy();
  });

  it('最初は非表示', () => {
    const service: LoadingIndicatorService = TestBed.get(
      LoadingIndicatorService
    );
    let visibility = true;

    service.visibility$.subscribe(x => {
      visibility = x;
    });

    // Then
    expect(visibility).toBeFalsy();
  });

  it('showを呼ぶと、visibilityがtrueになる', () => {
    // Given
    const service: LoadingIndicatorService = TestBed.get(
      LoadingIndicatorService
    );
    let visibility: boolean;

    service.visibility$.subscribe(x => {
      visibility = x;
    });

    // When
    service.show();

    // Then
    expect(visibility).toBeTruthy();
  });

  it('showのあとhideを呼ぶと、visibilityがfalseになる', () => {
    // Given
    const service: LoadingIndicatorService = TestBed.get(
      LoadingIndicatorService
    );
    let visibility: boolean;

    service.visibility$.subscribe(x => {
      visibility = x;
    });

    // When
    service.show();
    service.hide();

    // Then
    expect(visibility).toBeFalsy();
  });
});
