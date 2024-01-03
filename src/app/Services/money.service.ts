import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {

  possibleCurrencies: string[] = [
    "USD",
    "EUR",
    "GBP",
    "CHF",
    "PLN",
  ]
  chosenCurrency: string;

  exchangeRates: Map<string, number> = new Map([
    ["USD", 1],
    ["EUR", 0.88],
    ["GBP", 0.73],
    ["CHF", 0.92],
    ["PLN", 3.97],
  ])
  constructor() { 
    this.chosenCurrency = this.possibleCurrencies[0];
  }
}
