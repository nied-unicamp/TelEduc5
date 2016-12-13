import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from './modal.component';
import { Http, Response } from '@angular/http';
import { Injectable, Component, NgModule } from '@angular/core';

@Component({
  selector: 'people-page',
  styleUrls: ['app/people.component.css'],
  templateUrl: 'app/people.component.html'
})
export class PeopleComponent {

    private data;
 
    constructor(private http:Http){
    }
 
    ngOnInit(){
    	this.getData();
    }
 
    getData(){
        this.http.get('http://localhost:8000/usuarios')
        		.subscribe(res => this.data = res.json());
    }
 }