import { Directive } from '@angular/core';

import { getValidator, getDirectiveName, getDirectiveProviders } from './helpers';

const name = 'isBase64';

export const isBase64 = getValidator(name)

@Directive({
  selector: getDirectiveName(name),
  providers: [getDirectiveProviders(name)]
})
export class Base64Validator { }
