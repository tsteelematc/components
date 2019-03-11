import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { AvueMultiplyingComponent } from './avue-multiplying/avue-mulitplying.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    AvueMultiplyingComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
