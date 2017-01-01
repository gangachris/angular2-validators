**[DEPRECATED]** Since the community is moving to just calling it Angular, this has been moved to https://github.com/gangachris/ng-validators

# Ng2 Validators
A List of validators for Angular 2 Forms based on [validator.js](https://github.com/chriso/validator.js). Current version only works with ReactiveFormsModule.
FormsModule Directive validators will come soon.

# Usage
## Install
```bash
$ npm install --save angular2-validators
```

## Use as Model Based Validators
Make sure you have ReactiveFormsModule imported in your modules.
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

The use the Validators with FormControls

```typescript
import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NG2Validators } from 'angular2-validators';

@Component({
  selector: 'app-root',
  template: `
      <form [formGroup]="theForm" novalidate>
          <label for="name">Email</label>
          <input type="text" class="form-control" name="email" formControlName="email">
      </form>
  `,
})
export class AppComponent {
  theForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.theForm = fb.group({
      email: ['', [Validators.required, NG2Validators.isEmail]]
    });
  }
}
```

## Contributing
Contribution Guideline isn't available yet, but PRs are so welcome to the develop branch.

## Added Validators
* isAfter
* isAlpha
* isAlphanumeric
* isAscii
* isBase64
* isBefore
* isBoolean
* isByteLength
* isCreditCard
* isCurrency
* isDataUri
* isDate
* isDecimal
* isEmail
* isFloat
* isFQDN
* isHexColor
* isHexaDecimal
* isInt
* isIP
* isISBN
* isJSON
* isLowerCase
* isMacAddress
* isNull
* isNumeric
* isUpperCase
* isURL
