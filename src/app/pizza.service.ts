import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  public loadPizzaToppings() {
    const pizzaToppingsFromWebService = [
      {name: 'Pepperoni', prince: 1.50},
      {name: 'Olives', prince: 2.50},
    ];

    return pizzaToppingsFromWebService.map(x =>({
      ...x,
      checked: false
    }))
  }
}
