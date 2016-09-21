import { Component } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';

import { isEmail, isAlpha, isAlphanumeric } from 'angular2-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  theForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.theForm = fb.group({
      alpha: [''],
      alphanumeric: [''],
      email: [''],
      equal: ['']
    });
  }
}
