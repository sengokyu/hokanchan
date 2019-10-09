import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Suggestion } from './suggestion.model';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  private static readonly apiUrl = '/Prod/suggest';
  private requestSubscriptions = new Array<Subscription>();
  private suggestions = new BehaviorSubject<Suggestion[]>([]);

  suggestions$ = this.suggestions.asObservable();

  constructor(private http: HttpClient) {}

  update(q: string): void {
    this.cancelRequest();

    const options = { fromObject: { q } };
    const params = new HttpParams(options);

    const request = this.http
      .get<Suggestion[]>(SuggestionService.apiUrl, {
        params
      })
      .subscribe(result => this.suggestions.next(result));

    this.requestSubscriptions.push(request);
  }

  private cancelRequest(): void {
    this.requestSubscriptions.forEach(i => i.unsubscribe());
    this.requestSubscriptions.length = 0;
  }
}
