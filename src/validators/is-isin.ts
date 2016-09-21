import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { getDirectiveName, getValidatorWithDefaultParam } from './helpers';

import * as validator from 'validator';

const name = 'isISIN';

export const isISIN = getValidatorWithDefaultParam(name)

@Directive({
  selector: getDirectiveName(name),
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => ISINValidator), multi: true }
  ]
})
export class ISINValidator implements Validator {
  constructor( @Attribute(name) public param: string) { }

  validate = (c: AbstractControl) => isISIN(this.param)(c);
}

// TODO figure out how to get json params
