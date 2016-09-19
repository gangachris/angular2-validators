import { Directive } from '@angular/core';

import { getValidator, getDirectiveName, getDirectiveProviders } from './helpers';

const name = 'isAscii';

export const isAscii = getValidator(name)

@Directive({
  selector: getDirectiveName(name),
  providers: [getDirectiveProviders(name)]
})
export class AsciiValidator { }
