import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Teleduc } from './app.component';

import { NgbdTabsetBasic }   from './tab.component';
import { MuralComponent } from './mural.component';
import { TaskComponent } from './task.component';
import { PeopleComponent } from './people.component';
import { ToolsComponent } from './tools.component';
import { HeaderTeleduc } from './header-teleduc.component';

@NgModule({
  imports:      [ 
                  NgbModule.forRoot(),
                  BrowserModule,
                  FormsModule
                ],
  
  declarations: [ 
                  Teleduc,
                  NgbdTabsetBasic,
                  MuralComponent,
                  TaskComponent,
                  PeopleComponent,
                  ToolsComponent,
                  HeaderTeleduc
                ],

  bootstrap:    [ 
                  Teleduc,
                  NgbdTabsetBasic,
                  MuralComponent,
                  TaskComponent,
                  PeopleComponent,
                  ToolsComponent,
                  HeaderTeleduc
                ]
})

export class AppModule { }