import { Injectable } from '@angular/core';
import { iDishes } from './iDishes';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  dishes: iDishes[] = [];

  constructor() { }

  addToCart(dishes: iDishes) {
    this.dishes.push(dishes);
  }

  getItems() {
    return this.dishes;
  }

  clearCart() {
    this.dishes = [];
    return this.dishes;
  }

  cartTotal() {
    let tAmount: number = 0;
    for (let val of this.dishes) {
      tAmount = val.price + tAmount;
    }
    return tAmount;
  }

  cartLenght() {
    return this.dishes.length;
  }
}
