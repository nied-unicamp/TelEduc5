"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import { ROUTER_DIRECTIVES } from '@angular/router';
var NgbdButtonsRadio = (function () {
    function NgbdButtonsRadio() {
        this.model = 1;
    }
    NgbdButtonsRadio = __decorate([
        core_1.Component({
            selector: 'ngbd-buttons-radio',
            template: "<div [(ngModel)]=\"model\" ngbRadioGroup name=\"radioBasic\">\n                <label class=\"btn btn-primary\">\n                    <input type=\"radio\" [value]=\"1\"> Left (pre-checked)\n                </label>\n                <label class=\"btn btn-primary\">\n                    <input type=\"radio\" value=\"middle\"> Middle\n                </label>\n                <label class=\"btn btn-primary\">\n                    <input type=\"radio\" [value]=\"false\"> Right\n                </label>\n            </div>\n            <hr>\n            <pre>{{model}}</pre>\n            ",
        }), 
        __metadata('design:paramtypes', [])
    ], NgbdButtonsRadio);
    return NgbdButtonsRadio;
}());
exports.NgbdButtonsRadio = NgbdButtonsRadio;
// @Component({
//     selector: 'my-app',
//     templateUrl: 'app/index.html',
//     //directives: [ ROUTER_DIRECTIVES ],
//     styleUrls: ['bootstrap/css/bootstrap.min.css', 'bootstrap/css/teleduc.css']
//  })
// export class AppComponent {
// }
//# sourceMappingURL=app.component.js.map