import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { Teleduc } from './app.component';

import { NgbdTabsetBasic }   from './tab.component';
import { TestComponent } from './test.component';
import { MuralComponent } from './mural.component';
import { TaskComponent } from './task.component';
import { PeopleComponent } from './people.component';
import { GroupComponent } from './group.component';
import { ToolsComponent } from './tools.component';
import { HeaderTeleduc } from './header-teleduc.component';
import { NgbdModalBasic } from './modal.component';
import { HeroFormReactiveModule } from './reactive/hero-form-reactive.module';

@NgModule({
  imports:      [ 
                  NgbModule.forRoot(),
                  BrowserModule,
                  FormsModule,
                  HeroFormReactiveModule,
                  HttpModule
                ],
  
  declarations: [ 
                  Teleduc,
                  NgbdTabsetBasic,
                  TestComponent,
                  MuralComponent,
                  TaskComponent,
                  PeopleComponent,
                  GroupComponent,
                  ToolsComponent,
                  HeaderTeleduc,
                  NgbdModalBasic
                ],

  bootstrap:    [ 
                  Teleduc,
                  NgbdTabsetBasic,
                  MuralComponent,
                  TaskComponent,
                  PeopleComponent,
                  ToolsComponent,
                  HeaderTeleduc,
                  NgbdModalBasic
                ]
})

export class AppModule { }