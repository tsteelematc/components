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

  ngOnInit() {
    this.availableToppings = this.pizzaSvc.loadPizzaToppings();
  }

}
