import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../interfaces/city';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
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
