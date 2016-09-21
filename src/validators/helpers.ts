import { NG_VALIDATORS, AbstractControl } from '@angular/forms';
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

export function getValidatorWithParam(name: string) {
  return (comparison: string) => {
    return (c: AbstractControl) => {
      return validator[name](c.value, comparison) ? null : {
        [name]: {
          valid: false
        }
      };
    }
  };
}

export function getDirectiveName(name: string) {
  return `[${name}][formControlName],[${name}][formControl],[${name}][ngModel]`;
};

export function getDirectiveProviders(name: string) {
  return {
    provide: NG_VALIDATORS,
    useValue: getValidator(name),
    multi: true
  }
};