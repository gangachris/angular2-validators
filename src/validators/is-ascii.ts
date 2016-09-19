import { Directive} from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';
import * as validator from 'validator';

export function isAscii(c: AbstractControl) {
  return validator.isAscii(c.value) ? null : {
    isAscii: {
      valid: false
    }
  };
}

@Directive({
  selector: '[isAscii][formControlName],[isAscii][formControl],[isAscii][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useValue: isAscii, multi: true }
  ]
})
export class AsciiValidator{}