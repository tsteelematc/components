import { Injectable } from '@angular/core';

// sets up for dependency-injection
@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  public loadPizzaToppings() {
    const pizzaToppingsFromWebService = [
      {name: 'Pepperoni', price: 1.50}
      , {name: 'Olive', price: 3.50}
      , {name: 'Mushroom', price: 2.50}
    ];

    return pizzaToppingsFromWebService.map(x =>({
      ...x
      , checked: false
    }));
  }
}
