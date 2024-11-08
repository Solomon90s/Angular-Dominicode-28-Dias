import { Component } from '@angular/core';
import { of, single, tap } from 'rxjs';

@Component({
  selector: 'app-single-operator',
  templateUrl: './single-operator.component.html',
  styleUrls: ['./single-operator.component.css']
})
export class SingleOperatorComponent {

  private data$ = of(1, 2, 3, 4, 5, 6);

  constructor() {
    this.data$
      .pipe(
        single((number:number) => number === 3),
        tap(res => console.log(res))
      )
    .subscribe()
  }

}
