import { Component, OnInit } from '@angular/core';
import { PizzaService } from './pizza.service';

interface PizzToppingsDisplay {
  name: string;
  price: number;
  checked: boolean;
}

@Component({
  selector: 'pizza-toppings',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  availablePizzaToppings: PizzToppingsDisplay[];
  total: number;
  // DI (dependency inject) the pizza service
  constructor(public pizzaSvc: PizzaService) { }

  ngOnInit() {
    this.availablePizzaToppings = this.pizzaSvc.loadPizzaToppings();
    console.log(this.availablePizzaToppings);
  }

}
