// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { JsonpModule } from '@angular/http';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbdModalBasic } from './modal.component';
import { Http, Response } from '@angular/http';

import { Injectable, Component, NgModule, OnInit } from '@angular/core';
import { UserService } from './reactive/user.service';
import { User } from './shared/user';

@Component({
  selector: 'people-page',
  styleUrls: ['app/people.component.css'],
  providers: [ UserService ],
  templateUrl: 'app/people.component.html'
})
export class PeopleComponent implements OnInit{

    // private users;

    constructor(private http:Http){
    }

    ngOnInit(){
    	this.getUsers();
    }

    getUsers(){
        this.http.get('http://localhost:8000/usuarios')
        		.subscribe(res => this.users = res.json());
    }

    users: User[];
    // mode = 'Observable';
    // errorMessage: string;

    // constructor (private userService: UserService) {}

    // getUsers() {
    // this.userService.getUsers()
    //                  .subscribe(
    //                    users => this.users = users);
    //                   //  error =>  this.errorMessage = <any>error);
    // }

    // addUser (name: string) {
    //   if (!name) { return; }
    //   this.userService.addUser(name)
    //                   .subscribe(
    //                     user  => this.users.push(user));
    //                     // ,error =>  this.errorMessage = <any>error);
    // }
}