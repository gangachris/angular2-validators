import { Directive} from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';
import * as validator from 'validator';

export function isEmail(c: AbstractControl) {
  return validator.isEmail(c.value) ? null : {
    isEmail: {
      valid: false
    }
  };
}

@Directive({
  selector: '[isEmail][formControlName],[isEmail][formControl],[isEmail][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useValue: isEmail, multi: true }
  ]
})
export class EmailValidator{}