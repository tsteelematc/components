import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

    constructor() { }

    public loadPizzaToppings() {
        const pizzaToppingsFromWebservice = [
            {name: 'Pepperoni', price: 1.50}
            , {name: 'Olives', price: 3.50}
        ];

        return pizzaToppingsFromWebservice.map(x => ({
            ...x
            , checked: false
        }));
    } 
}
