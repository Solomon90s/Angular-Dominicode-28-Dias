import { City } from './../../interfaces/city';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-cities',
  templateUrl: './home-cities.component.html',
  styleUrls: ['./home-cities.component.scss'],
})
export class HomeCitiesComponent {
  cities: City[] = [];
  selection!: City;
  criteria = '';

  constructor(private dataService: DataService) {
    this.dataService.selectedCity$.subscribe(
      (city: City) => (this.selection = city)
    );

    this.dataService.getCities().subscribe(cities => {
      //
      this.cities = [...cities];
    });
  }

  addNewCity(city: string): void {
    // this.cities.push(city);
    this.dataService.addNewCity(city).subscribe(res => {
      this.cities.push(res);
    });
  }
  onCitySelected(city: City): void {
    // Lo guardamos en nuestro servicio
    this.dataService.setCity(city);
  }

  onClear(): void {
    this.selection = {
      _id: '',
      name: '',
    };
  }

  onCityDelete(id: string): void {
    if (confirm('Are you sure?')) {
      this.dataService.deleteCity(id).subscribe(() => {
        //? eliminamos de nuestro array local
        const tempArr = this.cities.filter(city => city._id !== id);
        //? lo añadimos al array temporal
        this.cities = [...tempArr];
        this.onClear();
      });
    }
  }

  updateCity(city: City): void {
    this.dataService.updateCity(city).subscribe(res => {
      //? actualizamos de nuestro array local
      const tempArr = this.cities.filter(item => item._id !== city._id);
      //? lo añadimos al array temporal
      this.cities = [...tempArr, city];
      this.onClear();
    });
  }
}
