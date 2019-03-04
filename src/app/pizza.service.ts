import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  public loadPizzaToppings() {
    const pizzaToppingsFromWebService = [
       { name: "Anchovies", price: 1.50 }
      ,{ name: "Black Olives", price: 1.00 }
    ]
    
  return pizzaToppingsFromWebService.map(x => ({
    ...x
    , checked: false
  }));
  }
}
