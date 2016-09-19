import { NgModule } from '@angular/core';

import {
  EmailValidator,
  AlphaValidator
} from './ng2-validators';

@NgModule({
  declarations: [EmailValidator, AlphaValidator],
  exports: [EmailValidator, AlphaValidator]
})
export class Ng2ValidatorsModule{ }