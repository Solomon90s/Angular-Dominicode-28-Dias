import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { City } from 'src/app/interfaces/city';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  //? Importante
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormNewItemComponent implements AfterViewInit {
  //! Este el componente hijo

  @Input() className = 'btn-primary';
  @Input() label!: string;
  @Input() selection!: City;

  //? Creamos la instancia del del evento para mandar la información
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<City>();

  //? Trabajamos con el viewchild
  @ViewChild('newItem') newItem!: ElementRef;

  // ? Con el afterviewinit accedemos al elemento del dom y así poder usar el viewchild
  ngAfterViewInit(): void {
    this.newItem.nativeElement.focus();
  }

  onAddNewItem(): void {
    this.newItemEvent.emit(this.newItem.nativeElement.value);
    this.onClear();
  }
  onUpdateItem(): void {
    const city: City = {
      _id: this.selection._id,
      name: this.newItem.nativeElement.value,
    };

    this.updateItemEvent.emit(city);
  }

  private onClear(): void {
    this.newItem.nativeElement.value = '';
  }
}
