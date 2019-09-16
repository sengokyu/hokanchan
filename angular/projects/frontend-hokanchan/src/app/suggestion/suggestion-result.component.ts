import { Component, OnInit } from '@angular/core';
import { SuggestionService } from './suggestion.service';

@Component({
  selector: 'app-suggestion-result',
  templateUrl: './suggestion-result.component.html',
  styles: []
})
export class SuggestionResultComponent {
  readonly suggestions$ = this.suggestionService.suggestions$;

  constructor(private suggestionService: SuggestionService) {}
}
