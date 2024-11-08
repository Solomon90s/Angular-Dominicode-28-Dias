import { Character } from './../../interfaces/character.interface';
import { RickMortyDataService } from '@shared/services/rick-morty-data.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Observable,
  Subject,
  switchMap
} from 'rxjs';

import { customOperator } from './custom-operator';
import { User } from '@pages/users/user.interface';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchTerm$ = new Subject<string>();
  characters$!: Observable<Character[]>;
  results$!: Observable<User>;
  private filterSvc = inject(RickMortyDataService);
  private searchSvc = inject(SearchService);

  constructor() {
    this.characters$ = this.searchTerm$.pipe(
      customOperator(
        (term: string) => term.length >= 4,
        500,
        (prev, curr) => prev === curr
      ),
      switchMap((term: string) => this.filterSvc.filterCharacter(term))
    );

    //? Usamos el operador switchmap
    this.results$ = this.searchTerm$.pipe(
      switchMap(( term: string) => this.searchSvc.search$(term))
    )
  }

  search(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.searchTerm$.next(element.value);
  }

}
