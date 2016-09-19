import { Directive} from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';

import { getDirectiveName } from './helpers';

import * as validator from 'validator';

export function isAlphanumeric(c: AbstractControl) {
  return validator.isAlphanumeric(c.value) ? null : {
    isAlphanumeric: {
      valid: false
    }
  };
}

@Directive({
  selector: getDirectiveName('isAlphanumeric'),
  providers: [
    { provide: NG_VALIDATORS, useValue: isAlphanumeric, multi: true }
  ]
})
export class AlphanumericValidator { }
