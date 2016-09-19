import { NgModule } from '@angular/core';

import {
  EmailValidator,
  AlphaValidator,
  AlphanumericValidator,
  AsciiValidator,
  Base64Validator,
  AlphaValidator
} from './ng2-validators';

@NgModule({
  declarations: [EmailValidator, AlphaValidator, AlphanumericValidator, AsciiValidator, Base64Validator, AlphaValidator],
  exports: [EmailValidator, AlphaValidator, AlphanumericValidator, AsciiValidator, Base64Validator, AlphaValidator]
})
export class Ng2ValidatorsModule{ }