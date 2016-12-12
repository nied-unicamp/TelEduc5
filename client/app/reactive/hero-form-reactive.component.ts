/* tslint:disable: member-ordering forin */
import { Component, OnInit }                  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User }                   from '../shared/user';
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';

@Component({
  selector: 'hero-form-reactive3',
  styleUrls: ['app/reactive/hero-form-reactive.component.css'],
  templateUrl: 'app/reactive/hero-form-reactive.component.html'
})
export class HeroFormReactiveComponent implements OnInit {

  user = new User('Abdullah', 'Souza', 'Abdullah@hotmail.com');

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.user = this.userForm.value;
  }

  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;
  addUser() {
    this.user = new User('', '', '');
    this.buildForm();

    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  userForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.userForm = this.fb.group({
      'name': [this.user.name, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(24),
          forbiddenNameValidator(/Aristeu/i)
        ]
      ],
      'lastname': [this.user.lastname],
      'email':    [this.user.email, Validators.required]
    });

    this.userForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onValueChanged(data?: any) {
    if (!this.userForm) { return; }
    const form = this.userForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'name': '',
    'email': ''
  };

  validationMessages = {
    'name': {
      'required':      'É necessário preencher o campo Nome.',
      'minlength':     'Nome precisa ter no mínimo 4 caractéres.',
      'maxlength':     'Nome não pode ter mais do que 24 caractéres.',
      'forbiddenName': 'Alguém chamado "Aristeu" não pode ser um usuário.'
    },
    'email': {
      'required': 'É necessário preencher o campo Email.'
    }
  };
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/