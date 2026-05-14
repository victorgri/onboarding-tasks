import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class FormComponent {
  formGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),

    age: new FormControl('', [
      Validators.required,
      Validators.min(18),
    ]),

    address: new FormGroup({
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
    }),
  });

  onSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
    } else {
      this.formGroup.markAllAsTouched();
    }
  }

  get name() {
    return this.formGroup.get('name');
  }

  get age() {
    return this.formGroup.get('age');
  }

  get city() {
    return this.formGroup.get('address.city');
  }

  get state() {
    return this.formGroup.get('address.state');
  }
}
