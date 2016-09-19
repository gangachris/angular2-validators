import { NgModule } from '@angular/core';

import {
  EmailValidator,
  AlphaValidator,
  AlphanumericValidator,
  AsciiValidator,
  Base64Validator
} from './ng2-validators';

@NgModule({
  declarations: [EmailValidator, AlphaValidator, AlphanumericValidator, AsciiValidator, Base64Validator],
  exports: [EmailValidator, AlphaValidator, AlphanumericValidator, AsciiValidator, Base64Validator]
})
export class Ng2ValidatorsModule{ }