import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  public loadPizzaToppings() {
    const pizzaToppings = [
      { name: 'Pepperoni', price: 1.50 }
      , { name: 'Olives', price: 1.75 }
    ];

    return pizzaToppings.map(x => ({...x, checked: false}));
  }
}
