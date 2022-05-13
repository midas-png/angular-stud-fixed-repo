import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface SpaceValidator<T extends FormControl> {
  (c: T): { [error: string]: any };
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  constructor() {}

  @Input()
  classifyer!: string;

  @Input()
  text!: string;

  @Input()
  type: string = 'text';

  validateSpace(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpaceAllowed: true };
    }
    return null;
  }

  validateParseToNumber(control: FormControl) {
    if (control.value != null && Number.isNaN(Number(control.value))) {
      return { noCharactersAllowed: true };
    }
    return null;
  }

  validationForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    price: new FormControl('', [
      Validators.required,
      this.validateParseToNumber,
    ]),
    city: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    furnished: new FormControl('', [Validators.required]),
    squareMeters: new FormControl('', [
      Validators.required,
      this.validateParseToNumber,
    ]),
    bedrooms: new FormControl('', [
      Validators.required,
      this.validateParseToNumber,
    ]),
    bathrooms: new FormControl('', [
      Validators.required,
      this.validateParseToNumber,
    ]),
    firstName: new FormControl('', [Validators.required, this.validateSpace]),
    lastName: new FormControl('', [Validators.required, this.validateSpace]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  get invalidValue() {
    return this.validationForm.get(this.classifyer.toString());
  }
}
