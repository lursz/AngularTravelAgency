import { Component } from '@angular/core';
import { PurchaseHistoryService } from '../../Services/purchase-history.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-purchase-history',
  standalone: true,
  imports: [NgFor],
  templateUrl: './purchase-history.component.html',
  styleUrl: './purchase-history.component.css'
})
export class PurchaseHistoryComponent {

  constructor(public purchaseHistoryService: PurchaseHistoryService){}
}
