import { Component } from '@angular/core';
import { interval, Observable, of, startWith, tap } from 'rxjs';

@Component({
  selector: 'app-startwith-operator',
  templateUrl: './startwith-operator.component.html',
  styleUrls: ['./startwith-operator.component.css']
})
export class StartwithOperatorComponent {
  counter$!: Observable<number>;
  private data$ = of(1, 2, 3, 4, 5);

  constructor() {
    this.counter$ = interval(3000)
      .pipe(
        startWith(15000),
        tap(res => console.log(res))
      )
  }

}
