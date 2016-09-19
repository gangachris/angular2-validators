import { Directive} from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';
import * as validator from 'validator';

export function isBase64(c: AbstractControl) {
  return validator.isBase64(c.value) ? null : {
    isBase64: {
      valid: false
    }
  };
}

@Directive({
  selector: '[isBase64][formControlName],[isBase64][formControl],[isBase64][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useValue: isBase64, multi: true }
  ]
})
export class Base64Validator{}