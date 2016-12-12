import { Component, EventEmitter, Input, Output } from '@angular/core';

import { User } from './user';

@Component({
  selector: 'user-submitted',
  styleUrls: ['app/reactive/hero-form-reactive.component.css'],
  template: `
  <div *ngIf="submitted">
    <h2>Você adicionou o seguinte usuário:</h2>
    <div class="row">
      <div class="col-xs-3">Nome</div>
      <div class="col-xs-9  pull-left">{{ user.name }}</div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-3">Sobrenome</div>
      <div class="col-xs-9 pull-left">{{ user.lastname }}</div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-3">Email</div>
      <div class="col-xs-9 pull-left">{{ user.email }}</div>
    </div>
    <br>
    <button class="btn btn-default" (click)="onClick()">Edit</button>
  </div>`
})
export class SubmittedComponent {
  @Input()  user: User;
  @Input()  submitted = false;
  @Output() submittedChange = new EventEmitter<boolean>();
  onClick() { this.submittedChange.emit(false); }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/