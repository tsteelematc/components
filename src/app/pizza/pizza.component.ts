import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'pizza-toppings',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  //dependency inject the pizza service
  constructor(public pizzaSvc: PizzaService) { }

  ngOnInit() {
      //use pizza service to load available pizza toppings
      const availablePizzaToppings = this.pizzaSvc.loadPizzaToppings();
      console.log(availablePizzaToppings);

  }

}
