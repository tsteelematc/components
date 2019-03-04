import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  public loadPizzaToppings() {
    const pizzaToppingsFromWebService = [
      {name: 'Pepperoni', price: 1.50},
      {name: 'Olives', price: 2.50},
      {name: 'Sausage', price: 2.9},
      {name: 'Chicken', price: 3},
      {name: 'Pizza', price: 20}
    ];

    return pizzaToppingsFromWebService.map(x =>({
      ...x,
      checked: false
    }))
  }
}
