import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { SomethingComponent } from './something/something.component';
import { DancingManComponent } from './dancing-man/dancing-man.component';
import { TjsSubtractComponent } from './tjs-subtract/tjs-subtract.component';
import { TjsAdditionComponent } from './tjs-addition/tjs-addition.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule
  , MatButtonModule
  , MatCheckboxModule 
  , MatFormFieldModule
  , MatInputModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    TjsAdditionComponent,
    SomethingComponent,
    DancingManComponent,
    TjsSubtractComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , BrowserAnimationsModule
    , MatCardModule
    , MatButtonModule
    , MatCheckboxModule
    , MatFormFieldModule
    , MatInputModule
    // , FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
