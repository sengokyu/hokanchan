import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

@Component({ selector: 'app-suggestion', template: '' })
class MockSuggestionComponent {}

@Component({ selector: 'app-suggestion-result', template: '' })
class MockSuggestionResultComponent {}

@Component({ selector: 'app-loading-indicator', template: '' })
class MockLoadingIndicatorComponent {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockSuggestionComponent,
        MockSuggestionResultComponent,
        MockLoadingIndicatorComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'hokanchan'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('hokanchan');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain(
  //     'Welcome to hokanchan!'
  //   );
  // });
});
