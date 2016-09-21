import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { getValidator, getDirectiveName, getDirectiveProviders } from './helpers';

import * as validator from 'validator';

const name = 'isEqual';

export const equals = getValidator(name)

@Directive({
  selector: getDirectiveName(name),
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualsValidator), multi: true }
  ]
})
export class EqualsValidator implements Validator {
  constructor( @Attribute('isEqual') public equals: string) { }

  validate(c: AbstractControl): { [key: string]: any } {
    if (this.equals && !validator.equals(c.value, this.equals))
      return {
        equal: false
      }
    return null;
  }
}