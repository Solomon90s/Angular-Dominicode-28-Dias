import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { City } from 'src/app/interfaces/city';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  //? Importante
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormNewItemComponent {
  //! Este el componente hijo

  @Input() className = 'btn-primary';
  @Input() label!: string;
  @Input() selection!: City;

  //? Creamos la instancia del del evento para mandar la información
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<City>();

  onAddNewItem(item: string): void {
    this.newItemEvent.emit(item);
  }
  onUpdateItem(item: City, change: string): void {
    const city: City = {
      _id: item._id,
      name: change,
    };

    this.updateItemEvent.emit(city);
  }
}
