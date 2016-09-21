import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { getDirectiveName, getValidatorWithRequiredParam } from './helpers';

import * as validator from 'validator';

const name = 'isWhiteListed';

export const isWhiteListed = getValidatorWithRequiredParam(name)

@Directive({
  selector: getDirectiveName(name),
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => WhiteListedValidator), multi: true }
  ]
})
export class WhiteListedValidator implements Validator {
  constructor( @Attribute(name) public param: string) { }

  validate = (c: AbstractControl) => isWhiteListed(this.param)(c);
}
