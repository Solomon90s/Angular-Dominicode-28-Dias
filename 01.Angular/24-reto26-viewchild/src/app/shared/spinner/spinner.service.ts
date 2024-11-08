import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  //? El simbolo del dollar al final indica que es un observable
  isLoading$ = new Subject<boolean>();
  show(): void {
    this.isLoading$.next(true);
  }
  hide(): void {
    this.isLoading$.next(false);
  }
  constructor() {}
}
