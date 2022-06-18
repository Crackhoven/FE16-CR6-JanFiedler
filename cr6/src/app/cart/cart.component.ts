import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { iDishes } from '../iDishes';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dishes: iDishes[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private fb: FormBuilder) { }

  clearCart() {
    window.alert('Your cart has been cleared');
    this.dishes = this.cartService.clearCart();
  }


  ngOnInit(): void {
    this.dishes = this.cartService.getItems();
    this.total = this.cartService.cartTotal();
  }

}
