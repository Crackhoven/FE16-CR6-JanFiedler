import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { dishes } from '../dishes';
import { iDishes } from '../iDishes';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes: iDishes[] = dishes;

  dish: iDishes = {} as iDishes;
  id: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart() {
    this.cartService.addToCart(this.dish);
    console.log("worked")
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["dishID"];
      this.dish = dishes[this.id];
    })
  }

}
