import { ContactForm } from './../../interfaces/contact-form';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact-form-driven',
  templateUrl: './contact-form-driven.component.html',
  styleUrls: ['./contact-form-driven.component.scss'],
})
export class ContactFormDrivenComponent {
  /*
  ? Vamos a trabajar con el @ViewChild y le pasamos el selector 'contactForm'
  ? que hace referencia a #contactForm (template variable) que tenemos en nuestro formulario, en el html
  */

  @ViewChild('contactForm') ContactForm!: NgForm;

  model: ContactForm = {
    name: '',
    checkAdult: false,
    department: '',
    comment: '',
  };

  onSubmit(): void {
    console.log('Form values', this.ContactForm);
  }
}
