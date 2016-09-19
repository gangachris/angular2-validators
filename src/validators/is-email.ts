import { Directive} from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';

import { getDirectiveName } from './helpers';

import * as validator from 'validator';

export function isEmail(c: AbstractControl) {
  return validator.isEmail(c.value) ? null : {
    isEmail: {
      valid: false
    }
  };
}

@Directive({
  selector: getDirectiveName('isEmail'),
  providers: [
    { provide: NG_VALIDATORS, useValue: isEmail, multi: true }
  ]
})
export class EmailValidator { }
