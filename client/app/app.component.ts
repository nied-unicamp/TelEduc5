import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
//import { ROUTER_DIRECTIVES } from '@angular/router';

let $ = require('/foundation/js/vendor/jquery.js');
let foundation = require('/foundation/js/vendor/foundation.js');

@Component({
    selector: 'my-app',
    templateUrl: 'teste.html',
    //directives: [ ROUTER_DIRECTIVES ],
    //styleUrls: ['app/main-nav/main-nav.component.css']
})
export class AppComponent implements AfterViewInit {

    constructor(private el: ElementRef) { }

    ngAfterViewInit() {
        $(this.el.nativeElement.ownerDocument).foundation();
    }

}