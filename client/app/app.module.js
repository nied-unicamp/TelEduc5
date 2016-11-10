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
var platform_browser_1 = require('@angular/platform-browser');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var tab_component_1 = require('./tab.component');
var mural_component_1 = require('./mural.component');
var task_component_1 = require('./task.component');
var people_component_1 = require('./people.component');
var tools_component_1 = require('./tools.component');
var header_teleduc_component_1 = require('./header-teleduc.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                ng_bootstrap_1.NgbModule.forRoot(),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.Teleduc,
                tab_component_1.NgbdTabsetBasic,
                mural_component_1.MuralComponent,
                task_component_1.TaskComponent,
                people_component_1.PeopleComponent,
                tools_component_1.ToolsComponent,
                header_teleduc_component_1.HeaderTeleduc
            ],
            bootstrap: [
                app_component_1.Teleduc,
                tab_component_1.NgbdTabsetBasic,
                mural_component_1.MuralComponent,
                task_component_1.TaskComponent,
                people_component_1.PeopleComponent,
                tools_component_1.ToolsComponent,
                header_teleduc_component_1.HeaderTeleduc
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map