import {Http, Response} from '@angular/http';
import {Injectable, Component } from '@angular/core';
 

@Component({
  selector: 'test-page',
  styleUrls: ['app/test.component.css'],
//   templateUrl: 'app/test.component.html'
  template: `<ul>
                <li *ngFor="let person of data">
                {{person.id}} - {{person.nome}} {{person.sobrenome}}
                </li>
	        </ul>`
})
export class TestComponent { 
 
    private data;
 
    constructor(private http:Http){
    }
 
    ngOnInit(){
    	this.getData();
    }
 
    getData(){
        this.http.get('http://localhost/AngularPHP/')
        		.subscribe(res => this.data = res.json());
    }
}