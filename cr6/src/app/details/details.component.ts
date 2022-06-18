import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { iDishes } from '../iDishes';
import { dishes } from '../dishes';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  dishes: iDishes = {} as iDishes;
  id: number = 0;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart() {
    this.cartService.addToCart(this.dishes);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["dishID"];
      this.dishes = dishes[this.id];
    })
  }

}
