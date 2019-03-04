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

  availableToppings: PizzaToppingDisplay[];
  total: number;


  // Dependency injection of pizza service
  constructor(public pizzaService: PizzaService) { }

  ngOnInit() {
    this.availableToppings = this.pizzaService.loadPizzaToppings();
  }

}
