import { Component } from '@angular/core';
import { MoneyService } from '../../Services/money.service';
import { NgFor } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-money',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './money.component.html',
  styleUrl: './money.component.css'
})
export class MoneyComponent {
  constructor(public moneyService: MoneyService) { }
  currentCurrency: string = this.moneyService.chosenCurrency;

  updateCurrency(currency: string) {
    console.log("chuj");
    this.moneyService.chosenCurrency = currency;
    console.log(this.moneyService.chosenCurrency);
    this.currentCurrency = currency;
  }

}
