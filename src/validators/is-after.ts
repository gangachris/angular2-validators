import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { getDirectiveName, getValidatorWithDefaultParam } from './helpers';

import * as validator from 'validator';

const name = 'isAfter';

export const isAfter = getValidatorWithDefaultParam(name)

@Directive({
  selector: getDirectiveName(name),
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => AfterValidator), multi: true }
  ]
})
export class AfterValidator implements Validator {
  constructor( @Attribute(name) public param: string) { }

  validate = (c: AbstractControl) => isAfter(this.param)(c);
}
