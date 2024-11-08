import { Component } from '@angular/core';
import { of, tap, timestamp } from 'rxjs';

@Component({
  selector: 'app-timestamp-operator',
  templateUrl: './timestamp-operator.component.html',
  styleUrls: ['./timestamp-operator.component.css']
})
export class TimestampOperatorComponent {
  data$ = of(1, 2, 3, 4);

  constructor() {
    this.data$
      .pipe(
        timestamp(),
        tap( res => console.log((res))
        )
      )
    .subscribe()
  }

}
