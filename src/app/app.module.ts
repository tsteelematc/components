import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { TjsSubtractComponent } from './tjs-subtract/tjs-subtract.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    TjsSubtractComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
