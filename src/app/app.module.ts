import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { SomethingsomethingComponent } from './somethingsomething/somethingsomething.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    SomethingsomethingComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
