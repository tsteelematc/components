import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  loadPizzaToppings() {
    const toppingsFromWebService = [
      { name: 'Pepperonni', price: 1.50 }
      , { name: 'Olives', price: 2.50 }
    ];

    return toppingsFromWebService.map(x => ({ ...x, checked: false }));
  }
}
