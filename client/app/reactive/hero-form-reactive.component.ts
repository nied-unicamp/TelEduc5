import { Component, OnInit }                  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';


import { User }                   from '../shared/user';
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';

@Component({
  selector: 'hero-form-reactive3',
  styleUrls: ['app/reactive/hero-form-reactive.component.css'],
  templateUrl: 'app/reactive/hero-form-reactive.component.html'
})
export class HeroFormReactiveComponent implements OnInit {

  private userAddUrl = 'http://localhost:8000/add/usuario';

  user = new User('Abdullah', 'Souza', 'A21', 'Abdullah@hotmail.com');

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.user = this.userForm.value;
  }

  // onSubmit() {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //   this.user = this.userForm.value;

  //   return this.http.post(this.userAddUrl, this.user | json, options);
  // }

  // AddUser(name: string, lastName: string, login: string, email: string) {
  //    let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });

  //   return this.http.post(this.userAddUrl, {"nome": name,"sobrenome": lastName,"login": login,"email": email}, options);
  // }

  active = true;
  newUser() {
    this.user = new User('', '', '', '');
    this.buildForm();

    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  userForm: FormGroup;
  constructor(private fb: FormBuilder, private http:Http) { }

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
      'login': [this.user.login],
      'email':    [this.user.email, Validators.required]
    });

    this.userForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }


  onValueChanged(data?: any) {
    if (!this.userForm) { return; }
    const form = this.userForm;

    for (const field in this.formErrors) {
      
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