import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
  //? Importante
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesComponent {

  //! Este es el componente hijo

  @Input() city!: string;
  @Input() selection!: string;

  @Output() cityClickedEvent = new EventEmitter<string>();

  onCityClicked(city: string): void {
    // emit
    this.cityClickedEvent.emit(city);
  }


}
