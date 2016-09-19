import { Directive} from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { getDirectiveName } from './helpers';
import * as validator from 'validator';

export function isAfter(c: AbstractControl) {
  return validator.isAfter(c.value) ? null : {
    isAfter: {
      valid: false
    }
  };
}

@Directive({
  selector: getDirectiveName('isAfter'),
  providers: [
    { provide: NG_VALIDATORS, useValue: isAfter, multi: true }
  ]
})
export class AfterValidator{}


