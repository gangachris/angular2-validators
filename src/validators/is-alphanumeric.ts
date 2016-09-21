import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { getDirectiveName, getValidatorWithDefaultParam } from './helpers';

import * as validator from 'validator';

const name = 'isAlphanumeric';

export const isAlphanumeric = getValidatorWithDefaultParam(name)

@Directive({
  selector: getDirectiveName(name),
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => AlphanumericValidator), multi: true }
  ]
})
export class AlphanumericValidator implements Validator {
  constructor( @Attribute(name) public param: string) { }

  validate = (c: AbstractControl) => isAlphanumeric(this.param)(c);
}
