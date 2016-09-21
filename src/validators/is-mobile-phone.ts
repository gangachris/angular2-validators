import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { getDirectiveName, getValidatorWithRequiredParam } from './helpers';

import * as validator from 'validator';

const name = 'isMobilePhone';

export const isMobilePhone = getValidatorWithRequiredParam(name)

@Directive({
  selector: getDirectiveName(name),
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => MobilePhoneValidator), multi: true }
  ]
})
export class MobilePhoneValidator implements Validator {
  constructor( @Attribute(name) public param: string) { }

  validate = (c: AbstractControl) => isMobilePhone(this.param)(c);
}
