import { NgModule } from '@angular/core';

import {
  AfterValidator,
  AlphaValidator,
  AlphanumericValidator,
  AsciiValidator,
  Base64Validator,
  BeforeValidator,
  BooleanValidator,
  ByteLengthValidator,
  CreditCardValidator,
  CurrencyValidator,
  DataUriValidator,
  DateValidator,
  DecimalValidator,
  EmailValidator,
  FloatValidator,
  FQDNValidator,
  HexColorValidator,
  HexaDecimalValidator,
  IntValidator,
  IPValidator,
  ISBNValidator,
  JSONValidator,
  LowerCaseValidator,
  MacAddressValidator,
  NullValidator,
  NumericValidator,
  UpperCaseValidator,
  URLValidator
} from './ng2-validators';

let Validators = [
  AfterValidator,
  AlphaValidator,
  AlphanumericValidator,
  AsciiValidator,
  Base64Validator,
  BeforeValidator,
  BooleanValidator,
  ByteLengthValidator,
  CreditCardValidator,
  CurrencyValidator,
  DataUriValidator,
  DateValidator,
  DecimalValidator,
  EmailValidator,
  FloatValidator,
  FQDNValidator,
  HexColorValidator,
  HexaDecimalValidator,
  IntValidator,
  IPValidator,
  ISBNValidator,
  JSONValidator,
  LowerCaseValidator,
  MacAddressValidator,
  NullValidator,
  NumericValidator,
  UpperCaseValidator,
  URLValidator]

@NgModule({
  declarations: Validators,
  exports: Validators
})
export class Ng2ValidatorsModule { }
