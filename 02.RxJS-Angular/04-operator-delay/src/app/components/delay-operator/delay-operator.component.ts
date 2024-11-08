import { Component } from '@angular/core';
import { delay, of, tap } from 'rxjs';

@Component({
  selector: 'app-delay-operator',
  templateUrl: './delay-operator.component.html',
  styleUrls: ['./delay-operator.component.css']
})
export class DelayOperatorComponent {
  data$ = of(1, 2, 3, 4);
  constructor() {
    this.data$
    .pipe(
      //? Le pasamos el tiempo en milisegundos, en esta caso lo retrasa 5 segundos
      delay(5000),
      tap( res => console.log(res))
    ).subscribe()
  }

}
