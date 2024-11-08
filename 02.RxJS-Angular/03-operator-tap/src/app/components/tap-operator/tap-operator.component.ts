import { Component } from '@angular/core';
import { map, of, tap } from 'rxjs';

@Component({
  selector: 'app-tap-operator',
  templateUrl: './tap-operator.component.html',
  styleUrls: ['./tap-operator.component.css']
})
export class TapOperatorComponent {
  //? El símbolo de $ hace referencia a que es un Observable
  data$ = of(1, 2, 3, 4);

  constructor() {
    this.data$.pipe(
      map((number :number) => number * number),
      //? Este tap es un espejo de su fuente (el map de arriba)
      tap((result: number) => result * result),
      //? No hay cambios porque el espejo del tap es el primer map que hemos puesto
      tap(res => console.log(res))
    )
    .subscribe()
  }

}
