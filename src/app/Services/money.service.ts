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

  exchangeRates: Map<string, number> = new Map([
    ["USD", 1],
    ["EUR", 1.1],
    ["GBP", 1.3],
    ["CHF", 1.01],
    ["PLN", 0.25],
  ])
  constructor() { }
}
