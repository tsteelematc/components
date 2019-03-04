import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
interface PizzaToppingDisplay{
  name: string;
  price: number;
  checked: boolean;
};
@Component({
  selector: 'pizza-toppings',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  avaiablePizzaToppings: PizzaToppingDisplay[];
  // total: number = 0;
  total = 0;

  calculateTotal = () => {
      this.total = this.avaiablePizzaToppings
      .filter(x => x.checked)
      .reduce(
          (acc, x) => acc+ x.price
      , 0)}
  // DI (denendecy inject) the pizza service.
  constructor(public pizzaSvc: PizzaService) { }

  ngOnInit() {
    // Use pizza servise to load the avaiable pizza toppings.
    // var svc = new PizzaService() :-(
      this.avaiablePizzaToppings = this.pizzaSvc.loadPizzaTopping();
      // console.log(avaiablePizzaToppings);
  }

}
