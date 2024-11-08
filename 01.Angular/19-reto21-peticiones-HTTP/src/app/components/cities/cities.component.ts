import { Component, EventEmitter, Input, Output } from '@angular/core';
import { City } from 'src/app/interfaces/city';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent {
  //! Este es el componente hijo

  @Input() city!: City;
  @Input() selection!: City;

  @Output() citySelectedEvent = new EventEmitter<City>();
  @Output() cityDeleteEvent = new EventEmitter<string>();

  onCitySelected(city: City): void {
    // emit
    this.citySelectedEvent.emit(city);
  }

  onCityDelete(id: string): void {
    this.cityDeleteEvent.emit(id);
  }
}
