import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { getDirectiveName, getValidatorWithDefaultParam } from './helpers';

import * as validator from 'validator';

const name = 'isIP';

export const isIP = getValidatorWithDefaultParam(name)

@Directive({
  selector: getDirectiveName(name),
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => IPValidator), multi: true }
  ]
})
export class IPValidator implements Validator {
  constructor( @Attribute(name) public param: string) { }

  validate = (c: AbstractControl) => isIP(this.param)(c);
}
