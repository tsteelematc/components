import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

interface PizzaToppingDisplay {
  name: String;
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
  total: number;

  //DI - dependency inject the pizza service
  constructor(public pizzaSvc: PizzaService) { }

  ngOnInit() {
    //use pizza service to load the available pizza toppings
    this.availablePizzaToppings = this.pizzaSvc.loadPizzaToppings();
  }

}
