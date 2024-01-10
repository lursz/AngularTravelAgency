import {TripsDbService} from './../../Services/trips-db.service';
import {Component} from '@angular/core';
import {CommonModule, NgFor, NgForOf} from '@angular/common';
import {CartService} from '../../Services/cart.service';
import {MoneyService} from '../../Services/money.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, NgForOf, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(public cartService: CartService, public moneyService: MoneyService, public tripsDbService: TripsDbService) {
  }

}
