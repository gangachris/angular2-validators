import {AbstractControl } from '@angular/forms';
import * as validator from 'validator';

export function getValidator(name: string) {
  return (c: AbstractControl) => {
    return validator[name](c.value) ? null : {
      [name]: {
        valid: false
      }
    };
  }
};
