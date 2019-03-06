import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

interface PizzaToppingDisplay {
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

  availablePizzaToppings: PizzaToppingDisplay[];
  total = 0;

  calculateTotal = () => {
    this.total = this.availablePizzaToppings
    .filter(x => x.checked)
    .reduce(
      (acc, x) => acc + x.price
      , 0
    );
  }

  recalculateTotal = () => {
      this.calculateTotal();
  }

  checkAll = () => {
      this.availablePizzaToppings = this.availablePizzaToppings.map(x => ({...x, checked: true}))
      this.recalculateTotal();
    }

  uncheckAll = () => {
    this.availablePizzaToppings = this.availablePizzaToppings.map(x => ({...x, checked: false}))
    this.recalculateTotal();
  }

  // DI (dependency inject) the pizza service.
  constructor(public pizzaSvc: PizzaService) { }

  ngOnInit() {
    // Use pizza service to load the available pizza toppings.
    // var svc = new PizzaService() : - (
    this.availablePizzaToppings = this.pizzaSvc.loadPizzaToppings();
  }

}
