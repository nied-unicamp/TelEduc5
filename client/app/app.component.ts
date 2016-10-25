import { Component } from '@angular/core';
//import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'ngbd-buttons-radio',
  template: `<div [(ngModel)]="model" ngbRadioGroup name="radioBasic">
                <label class="btn btn-primary">
                    <input type="radio" [value]="1"> Left (pre-checked)
                </label>
                <label class="btn btn-primary">
                    <input type="radio" value="middle"> Middle
                </label>
                <label class="btn btn-primary">
                    <input type="radio" [value]="false"> Right
                </label>
            </div>
            <hr>
            <pre>{{model}}</pre>
            `,
})
export class NgbdButtonsRadio {
  model = 1;
}

// @Component({
//     selector: 'my-app',
//     templateUrl: 'app/index.html',
//     //directives: [ ROUTER_DIRECTIVES ],
//     styleUrls: ['bootstrap/css/bootstrap.min.css', 'bootstrap/css/teleduc.css']
//  })
// export class AppComponent {

// }
