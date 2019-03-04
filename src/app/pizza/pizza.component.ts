import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'pizza-toppings',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  // DI (denendecy inject) the pizza service.
  constructor(public pizzaSvc: PizzaService) { }

  ngOnInit() {
    // Use pizza servise to load the avaiable pizza toppings.
    // var svc = new PizzaService() :-(
      const avaiablePizzaToppings = this.pizzaSvc.loadPizzaTopping();
      console.log(avaiablePizzaToppings);
  }

}
