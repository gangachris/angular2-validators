import { Directive} from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { getDirectiveName } from './helpers';
import * as validator from 'validator';

export function isBoolean(c: AbstractControl) {
  return validator.isAfter(c.value) ? null : {
    isAfter: {
      valid: false
    }
  };
}

@Directive({
  selector: getDirectiveName('isBoolean'),
  providers: [
    { provide: NG_VALIDATORS, useValue: isBoolean, multi: true }
  ]
})
export class BooleanValidator{}