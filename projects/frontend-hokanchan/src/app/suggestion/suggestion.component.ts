import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { SuggestionService } from './suggestion.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html'
})
export class SuggestionComponent implements OnInit {
  readonly suggestions$ = this.suggestionService.suggestions$;
  queryWord = '';

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private suggestionService: SuggestionService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(filter(params => params.has('q')))
      .subscribe(params => {
        this.queryWord = params.get('q');
        this.showResult();
      });
  }

  onSubmit(): void {
    this.location.go('.', `q=${this.queryWord}`);
    this.showResult();
  }

  private showResult(): void {
    this.suggestionService.update(this.queryWord);
  }
}
