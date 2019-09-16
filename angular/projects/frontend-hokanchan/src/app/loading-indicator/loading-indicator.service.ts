import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * LoadingIndicatorの表示、非表示状態を保持します。
 */
@Injectable({
  providedIn: 'root'
})
export class LoadingIndicatorService {
  private visibleCount = 0;
  private visibility = new BehaviorSubject<boolean>(false);
  readonly visibility$ = this.visibility.asObservable();

  show(): void {
    this.visibility.next(++this.visibleCount > 0);
  }

  hide(): void {
    this.visibility.next(--this.visibleCount > 0);

    // なにかの間違いで0未満になってしまったとき用の保険
    if (this.visibleCount < 0) {
      this.visibleCount = 0;
    }
  }
}
