import { Directive } from '@angular/core';

import { getValidator, getDirectiveName, getDirectiveProviders } from './helpers';

const name = 'isAlphanumeric';

export const isAlphanumeric = getValidator(name)

@Directive({
  selector: getDirectiveName(name),
  providers: [getDirectiveProviders(name)]
})
export class AlphanumericValidator { }
