import { Component } from '@angular/core';
import { count, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-hot-observable',
  templateUrl: './hot-observable.component.html',
  styleUrls: ['./hot-observable.component.scss']
})
export class HotObservableComponent {
  counter = 0;
  private intervalSubscription!: Subscription;

  constructor() {
    this.start();
  }

  start(){
    //? Empezamos la emisión de datos
    this.intervalSubscription = interval(1000).subscribe(value => {
      this.counter = value;
    });
  }

  stop(){
    //? Paramos la emisión del observable
    this.intervalSubscription.unsubscribe();
  }

}
