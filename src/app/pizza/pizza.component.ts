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

  // Type cast to interface
  availableToppings: PizzaToppingDisplay[];
  total = 0;

  // Dependency injection of pizza service
  constructor(public pizzaService: PizzaService) { }

  ngOnInit() {
    this.availableToppings = this.pizzaService.loadPizzaToppings();
  }

  calculateTotal = () => {
    // Filter items to the toppings that are checked
    // Total the prices of the ones that are checked
    this.total = this.availableToppings.filter(x => x.checked)
        .reduce((acc, x) => acc + x.price, 0);
  }

}
