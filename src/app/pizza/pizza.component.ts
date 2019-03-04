import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'pizza-toppings',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  // DI (dependency inject) the pizza service.
  constructor(public pizzaSvc: PizzaService) { }

  ngOnInit() {
    // Use pizza service to load the available pizza toppings.
    // var svc = new PizzaService() :-(
    const availablePizzaToppings = this.pizzaSvc.loadPizzaToppings();
    console.log(availablePizzaToppings);
  }

}
