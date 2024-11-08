import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  //? El simbolo del dollar al final indica que es un observable
  isLoading$ = this.spinnerService.isLoading$;
  constructor(private spinnerService: SpinnerService) {}
}
