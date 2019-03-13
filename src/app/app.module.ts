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

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    SomethingComponent,
    DancingManComponent,
    TjsSubtractComponent,
    TjsAdditionComponent
  ],
  imports: [
    BrowserModule
    , FormsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
