import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

//import { AppComponent }   from './app.component';
import { NgbdButtonsRadio }   from './app.component';

@NgModule({
  imports:      [ NgbModule.forRoot(), BrowserModule, FormsModule ],
  declarations: [ //AppComponent, 
  NgbdButtonsRadio ],
  bootstrap:    [ //AppComponent
  NgbdButtonsRadio ]
})

export class AppModule { }