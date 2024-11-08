import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, OnDestroy {



  url = 'https://medium.com/angular-chile/angular-componentes-y-sus-ciclos-de-vida-aa639e13a688';

  title = 'reto08-ciclo-de-vida-de-componentes';

  cycles = ['OnChanges', 'OnInit', 'DoCheck', 'AfterContentInit', 'AfterContentChecked', 'AfterViewInit', 'AfterViewChecked', 'OnDestroy'];


  cities = ['Madrid', 'Barcelona', 'Bilbao']

  selection!: string;


  //? No lo veremos porque no tenemos un input o un output
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change ->', changes);
    ;
  }

  //? Se ejecuta siempre, es el primero que se ejecuta si no existe el ngOnChanges
  ngOnInit(): void {
    console.log('OnInit -> ');
    ;
  }

  //? Se ejecuta siempre que se destruye el componente
  ngOnDestroy(): void {
    console.log('Destroy');
    ;
  }

  onCityClicked(city: string):void {
    console.log('City ->', city);
    this.selection = city;
    }

    onClear():void {
        this.selection = '';
      }




}
