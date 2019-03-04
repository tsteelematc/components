import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  public loadPizzaToppings() {
    const pizzaToppingsFromWebService = [
      { name: 'Pepperoni', price: 1.50 }
      , { name: '', price: }
    ];
  }
}
