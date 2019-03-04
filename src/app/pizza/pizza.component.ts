import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

interface PizzaToppingDisplay {
  name: string;
  price: number;
  checked: boolean;
}

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  constructor(public pizzaSvc: PizzaService) { }

  availableToppings: PizzaToppingDisplay[];
  total = 0;
  get showWarning() {
    //return this.availableToppings.filter(x => x.checked).length === 0;
    return !this.availableToppings.some(x => x.checked);
  }

  ngOnInit() {
    this.availableToppings = this.pizzaSvc.loadPizzaToppings();
  }

  calculateTotal() {
    this.total = this.availableToppings
      .filter(x => x.checked)
      .reduce(
        (acc, x) => acc + x.price
        , 0
      );
  }
}
