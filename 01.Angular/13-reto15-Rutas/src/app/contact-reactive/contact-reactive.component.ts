import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent {
  constructor() {

  }

  private fb = inject(FormBuilder);

  public contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)], [] ],
    checkAdult: [, [Validators.required],[]],
    department: ['', [Validators.required], []],
    comment: ['',[Validators.required, Validators.maxLength(255)],[]]
  });


  onSubmit() {
    console.log('Form ->', this.contactForm.value);

    }

  // onPatchValue():void {
  //   this.contactForm.patchValue({name: 'Jose Manuel'})
  // }

}
