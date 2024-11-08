import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  //? 1. Para trabajar con query params
  constructor(private readonly router: Router) { }

  //? 2. Para trabajar con query params
  goToReactive(): void {
    this.router.navigate(['contact'], {queryParams: {name: 'SOLOMON'}});
  }


  //? 1. Para trabajar con parámetros
  goToReactiveWithParams(): void {
    this.router.navigate(['contact', '580']);
  }

}
