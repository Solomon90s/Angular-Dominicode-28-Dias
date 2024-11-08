import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss'],
})
export class ContactReactiveComponent {
  //! Creamos la propiedad id, que es el parámetro que va en la url
  id!: string;

  constructor(
    //? Creamos la propiedad route, para recuperar el valor que nos pasan por la url, queryparams
    private readonly route: ActivatedRoute
  ) {
    // this.route.queryParams.subscribe(
    //   (params: Params) => {
    //     this.name = params['name']
    //   }
    // );
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }

  private fb = inject(FormBuilder);

  //? Creamos la propiedad para recuperar el valor que nos pasan por la url
  name!: string;

  public contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)], []],
    checkAdult: [, [Validators.required], []],
    department: ['', [Validators.required], []],
    comment: ['', [Validators.required, Validators.maxLength(255)], []],
  });

  onSubmit() {
    console.log('Form ->', this.contactForm.value);
  }

  // onPatchValue():void {
  //   this.contactForm.patchValue({name: 'Jose Manuel'})
  // }
}
