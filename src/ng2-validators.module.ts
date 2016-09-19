import { NgModule } from '@angular/core';

import {
  EmailValidator,
  AlphaValidator,
  AlphanumericValidator,
  AsciiValidator,
  Base64Validator,
  AfterValidator,
  BooleanValidator
} from './ng2-validators';

@NgModule({
  declarations: [EmailValidator, AlphaValidator, AlphanumericValidator, AsciiValidator, Base64Validator, AfterValidator, BooleanValidator],
  exports: [EmailValidator, AlphaValidator, AlphanumericValidator, AsciiValidator, Base64Validator, AfterValidator, BooleanValidator]
})
export class Ng2ValidatorsModule{ }
