**NOTE** Still in development

# Ng2 Validators
A List of validators for Angular 2 Forms based on [validator.js](https://github.com/chriso/validator.js). Current version only works with ReactiveFormsModule.
FormsModule Directive validators will come soon.

# Usage
## Install
You need to have `@angular/forms` installed.

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

import { Ng2Validators } from 'angular2-validators';

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
      email: ['', [Validators.required, Ng2Validators.isEmail]]
    });
  }
}
```

# Showing Errors in Forms
Ideally we should be able to show errors in forms since Angular exposes validity of forms and input.
In the above case for instance, by simple adding
```html
<form [formGroup]="theForm" novalidate>
	<label for="name">Email</label>
	<input type="text" class="form-control" name="email" formControlName="email">
	<div>{{ theForm.controls.email.errors | json }}</div>
</form>
```
We can see this json the first time the component is rendered.
```
{ "required": true, "isEmail": { "valid": false } }
```
When we begin typing a little, it will change to
```
{ "isEmail": { "valid": false } }
```
The finally when we've typed a good email address, it changes to
```
null
```

So Ideally, to apply some CSS to show validity of the above input, we could do this. I've used some bootstrap classes
```html
<label class="form-control-label" for="inputSuccess1">Email</label>
<input type="text" class="form-control form-control-success" name="email" formControlName="email">
<div class="form-control-feedback">
	<div class="alert alert-danger" *ngIf="theForm.controls.email.errors?.required">Email is required</div>
	<div class="alert alert-danger" *ngIf="theForm.controls.email.errors?.isEmail">Email is invalid</div>
	{{ theForm.controls.email.errors | json }}
</div>
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
