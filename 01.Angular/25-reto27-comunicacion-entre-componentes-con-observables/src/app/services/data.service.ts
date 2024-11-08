import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { City } from '../interfaces/city';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const initCity: City = {
  _id: '',
  name: '',
};

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //? El behaviorsubject emite el último valor a todas las nuevas suscripciones
  //? city$, el símbolo del $ significa que es un observable
  private city$ = new BehaviorSubject<City>(initCity);

  //? Creamos un getter
  get selectedCity$(): Observable<City> {
    return this.city$.asObservable();
  }

  setCity(city: City): void {
    this.city$.next(city);
  }

  private API = environment.api;
  constructor(private http: HttpClient) {}

  addNewCity(city: string): Observable<City> {
    const body = { name: city };
    return this.http.post<City>(this.API, body);
  }
  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.API);
  }

  updateCity(city: City): Observable<void> {
    const body = { name: city.name };
    return this.http.put<void>(`${this.API}/${city._id}`, body);
  }
  deleteCity(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
