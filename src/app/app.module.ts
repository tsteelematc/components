import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { WorstComponent } from './worst/worst.component';
import { MwhDoesAThingComponent } from './mwh-does-athing/mwh-does-athing.component';
import { TimespanComponent } from './timespan/timespan.component';
import { MathComponent } from './math/math.component';
import { AwesomeComponentComponent } from './awesome-component/awesome-component.component';
import { PrefixerComponent } from './prefixer/prefixer.component';
import { SjsAdditionComponent } from './sjs-addition/sjs-addition.component';
import { AvueMultiplyingComponent } from './avue-multiplying/avue-mulitplying.component';
import { SomethingComponent } from './something/something.component';
import { DancingManComponent } from './dancing-man/dancing-man.component';
import { TjsSubtractComponent } from './tjs-subtract/tjs-subtract.component';
import { TjsAdditionComponent } from './tjs-addition/tjs-addition.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    WorstComponent,
    MwhDoesAThingComponent,
    TimespanComponent,
    MathComponent,
    AwesomeComponentComponent,
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
    , FormsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
