import { NgModule } from '@angular/core';

import {
  EmailValidator,
  AlphaValidator,
  AlphanumericValidator,
  AsciiValidator,
  Base64Validator,
  AlphaValidator,
  BooleanValidator
} from './ng2-validators';

@NgModule({
  declarations: [EmailValidator, AlphaValidator, AlphanumericValidator, AsciiValidator, Base64Validator, AlphaValidator, BooleanValidator],
  exports: [EmailValidator, AlphaValidator, AlphanumericValidator, AsciiValidator, Base64Validator, AlphaValidator, BooleanValidator]
})
export class Ng2ValidatorsModule{ }
