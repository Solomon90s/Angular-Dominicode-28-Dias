import { Component } from '@angular/core';
import { interval, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private stop$ = new Subject<number>();
  counter!: number;

  start(){
    interval(1000)
      .pipe(
        //? Le indicamos cuando queremos detener la emisión
        takeUntil(this.stop$),
        tap((val:number) => this.counter = val)
      )
    .subscribe((val:number) => console.log((val))
    )
  }
  stop(){
    this.stop$.next(0);
  }

}
