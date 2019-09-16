import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BehaviorSubject } from 'rxjs';
import { LoadingIndicatorComponent } from './loading-indicator.component';
import { LoadingIndicatorService } from './loading-indicator.service';

describe('LoadingIndicatorComponent', () => {
  let component: LoadingIndicatorComponent;
  let fixture: ComponentFixture<LoadingIndicatorComponent>;

  beforeEach(async(() => {
    const loadingIndicatorService = {
      visibility$: new BehaviorSubject<Boolean>(false)
    };

    TestBed.configureTestingModule({
      declarations: [LoadingIndicatorComponent],
      imports: [MatProgressBarModule],
      providers: [
        { provide: LoadingIndicatorService, useValue: loadingIndicatorService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('最初は表示されていない', () => {
    // Given
    const el: HTMLElement = fixture.nativeElement.querySelector(
      'mat-progress-bar'
    );

    // Then
    expect(el.style['visibility']).toBe('hidden');
  });

  it('サービスに応じて表示される', () => {
    // Givin
    const loadingService = TestBed.get(LoadingIndicatorService);
    const el: HTMLElement = fixture.nativeElement.querySelector(
      'mat-progress-bar'
    );

    // When
    loadingService.visibility$.next(true);
    fixture.detectChanges();

    // Then
    expect(el.style['visibility']).toBe('visible');
  });
});
