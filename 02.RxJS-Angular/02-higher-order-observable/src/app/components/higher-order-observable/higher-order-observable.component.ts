import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, Character } from 'src/app/interfaces/character';
import { concatAll, map, Observable, switchMap } from 'rxjs';



@Component({
  selector: 'app-higher-order-observable',
  templateUrl: './higher-order-observable.component.html',
  styleUrls: ['./higher-order-observable.component.css']
})
export class HigherOrderObservableComponent {
  data$!: Observable<Character>;
  private http = inject(HttpClient);
  private API = 'https://rickandmortyapi.com/api/character';

  constructor() {
    this.data$ = this.http.get<Response>(this.API).pipe(
      //? Con el map extraemos los resultados que queremos
      map((response: Response) => response.results),
      map(() => Math.floor(Math.random() * 20)),
      //? El switchmap convierte el observable, es de orden superior
      switchMap((id: number) => this.http.get<Character>(`${this.API}/${id}`)),
    );
  }




}
