import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  url = 'https://medium.com/angular-chile/angular-componentes-y-sus-ciclos-de-vida-aa639e13a688';

  title = 'reto08-ciclo-de-vida-de-componentes';

  cycles = ['OnChanges', 'OnInit', 'DoCheck', 'AfterContentInit', 'AfterContentChecked', 'AfterViewInit', 'AfterViewChecked', 'OnDestroy'];


  cities = ['Madrid', 'Barcelona', 'Bilbao']

  selection!: string;




  onCityClicked(city: string):void {
    console.log('City ->', city);
    this.selection = city;
    }

    onClear():void {
        this.selection = '';
      }




}
