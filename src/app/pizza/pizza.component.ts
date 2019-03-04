import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'pizza-toppings',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  // Dependency injection of pizza service
  constructor(public pizzaService: PizzaService) { }

  ngOnInit() {
    const availableToppings = this.pizzaService.loadPizzaToppings();
    console.log(availableToppings);
  }

}
