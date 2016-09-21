import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { getDirectiveName, getValidatorWithRequiredParam } from './helpers';

import * as validator from 'validator';

const name = 'equals';

export const equals = getValidatorWithRequiredParam(name)

@Directive({
  selector: getDirectiveName(name),
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualsValidator), multi: true }
  ]
})
export class EqualsValidator implements Validator {
  constructor( @Attribute(name) public param: string) { }

  validate = (c: AbstractControl) => equals(this.param)(c);
}
