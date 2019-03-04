import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'pizza-toppings',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  // Dependency inject the pizza service by specifying the service variable in the constructor of the component
  constructor(public pizzaSvc: PizzaService) { }

  ngOnInit() {
    // use the pizza service to load available pizza toppings
    // gain access to pizza service via magical dependency injection
    const availablePizzaToppings = this.pizzaSvc.loadPizzaToppings();
    console.log(availablePizzaToppings);
  }

}
