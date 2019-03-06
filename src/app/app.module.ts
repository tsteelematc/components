import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { SjsAdditionComponent } from './sjs-addition/sjs-addition.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    SjsAdditionComponent,
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
