import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  public loadPizzaToppings = () => {
    const pizzaToppings = [
      { name: "Pepperoni", price: 1.50 },
      { name: "Extra Cheese", price: 1.00 },
      { name: "Sausage", price: 1.75 },
      { name: "Olives", price: 1.50 },
      { name: "Pineapple", price: 2.00 }
    ];

    return pizzaToppings.map(x => ({...x, checked: false}));
  }
}
