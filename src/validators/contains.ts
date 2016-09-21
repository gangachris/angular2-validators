import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { getDirectiveName, getDirectiveProviders, getValidatorWithParam } from './helpers';

import * as validator from 'validator';

const name = 'contains';

export const contains = getValidatorWithParam(name)

@Directive({
  selector: getDirectiveName(name),
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => ContainsValidator), multi: true }
  ]
})
export class ContainsValidator implements Validator {
  constructor( @Attribute(name) public param: string) { }

  validate(c: AbstractControl): { [key: string]: any } {
    if (this.param && !validator[name](c.value, this.param))
      return {
        [name]: false
      }
    return null;
  }
}
