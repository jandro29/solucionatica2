import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-conversemos',
  templateUrl: './conversemos.component.html',
  styleUrls: ['./conversemos.component.css'],
})
export class ConversemosComponent implements OnInit {
  env = environment;
  formLoading: boolean = false;
  messageSent: boolean = false;

  contactForm = this.formBuilder.group({
    nombres: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    apellidos: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', [
      Validators.required,
      Validators.pattern('[- +()0-9]+'),
    ]),
    mensaje: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  onSubmit() {
    if (this.contactForm.status === 'INVALID') return;

    this.formLoading = true;

    const contactData = {
      nombres: this.contactForm.value.nombres,
      apellidos: this.contactForm.value.apellidos,
      correo: this.contactForm.value.correo,
      telefono: this.contactForm.value.telefono,
      mensaje: this.contactForm.value.mensaje,
    };

    this.http
      .post<any>(`${this.env.apiURL}/contact-form`, contactData)
      .subscribe(
        (resp) => {
          this.formLoading = false;
          this.messageSent = true;
          this.resetForm();
          this.router.navigate(['solicitud']);
        },
        (error) => {
          alert('Ocurrió un error. Inténtelo nuevamente en unos minutos.');
          this.formLoading = false;
        }
      );
  }

  resetForm() {
    this.contactForm.controls['nombres'].patchValue('');
    this.contactForm.controls['apellidos'].patchValue('');
    this.contactForm.controls['correo'].patchValue('');
    this.contactForm.controls['telefono'].patchValue('');
    this.contactForm.controls['mensaje'].patchValue('');
  }

  ngOnInit(): void {}
}
