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
  total: number;
  
  // Dependency inject the pizza service by specifying the service variable in the constructor of the component
  constructor(public pizzaSvc: PizzaService) { }

  

  ngOnInit() {
    // use the pizza service to load available pizza toppings
    // gain access to pizza service via magical dependency injection
    this.availablePizzaToppings = this.pizzaSvc.loadPizzaToppings();
    
  }

}
