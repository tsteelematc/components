import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { MwhDoesAThingComponent } from './mwh-does-athing/mwh-does-athing.component';
import { PrefixerComponent } from './prefixer/prefixer.component';
import { SjsAdditionComponent } from './sjs-addition/sjs-addition.component';
import { AvueMultiplyingComponent } from './avue-multiplying/avue-mulitplying.component';
import { SomethingComponent } from './something/something.component';
import { DancingManComponent } from './dancing-man/dancing-man.component';
import { TjsSubtractComponent } from './tjs-subtract/tjs-subtract.component';
import { TjsAdditionComponent } from './tjs-addition/tjs-addition.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    MwhDoesAThingComponent,
    PrefixerComponent,
    SjsAdditionComponent,
    AvueMultiplyingComponent,
    SomethingComponent,
    DancingManComponent,
    TjsSubtractComponent,
    TjsAdditionComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
