import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { TjsAdditionComponent } from './tjs-addition/tjs-addition.component';
import { DfsSubtractComponent } from './dfs-subtract/dfs-subtract.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    TjsAdditionComponent,
    DfsSubtractComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
