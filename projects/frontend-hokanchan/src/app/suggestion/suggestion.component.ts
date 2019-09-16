import { Location } from '@angular/common';
import { Component } from '@angular/core';

import { SuggestionService } from './suggestion.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html'
})
export class SuggestionComponent {
  readonly suggestions$ = this.suggestionService.suggestions$;
  queryWord = '';

  constructor(
    private location: Location,
    private suggestionService: SuggestionService
  ) {}

  onSubmit(): void {
    this.location.go('.', `q=${this.queryWord}`);

    this.suggestionService.update(this.queryWord);
  }
}
