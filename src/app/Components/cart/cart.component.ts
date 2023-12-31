import { Component } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, NgForOf],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(public cartService: CartService){}

}
