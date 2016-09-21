import { NG_VALIDATORS, AbstractControl } from '@angular/forms';
import * as validator from 'validator';

export const invalid = {
  valid: false
};

export function getValidator(name: string) {
  return (c: AbstractControl) => {
    return validator[name](c.value) ? null : {
      [name]: invalid
    };
  }
};

export function getValidatorWithDefaultParam(name: string) {
  return (comparison: string) => {
    return (c: AbstractControl) => {
      if (!comparison) {
        return validator[name](c.value) ? null : {
          [name]: invalid
        };
      }

      return validator[name](c.value, comparison) ? null : {
        [name]: invalid
      };
    }
  };
}

export function getValidatorWithRequiredParam(name: string) {
  return (comparison: string) => {
    return (c: AbstractControl) => {
      return comparison && validator[name](c.value, comparison) ? null : {
        [name]: invalid
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