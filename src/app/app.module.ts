import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { MwhDoesAThingComponent } from './mwh-does-athing/mwh-does-athing.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    MwhDoesAThingComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
