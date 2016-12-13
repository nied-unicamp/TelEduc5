import {Component} from '@angular/core';

@Component({
  selector: 'teleduc',
  styleUrls: ['bootstrap/css/teleduc.css'],
  template: `
        <header-teleduc></header-teleduc>
        <div class="row" id="content">
            <div class="col-xs-2" id="left-menu">
                <tools></tools>
            </div>
            <div class="col-xs-7" id="main-content">
                <ngbd-tabset-basic></ngbd-tabset-basic>
            </div>
        </div>
  `

})
export class Teleduc { }