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


tripStatus = (start_date: string, end_date: string) => {
  const today = new Date();
  const startDate = new Date(start_date);
  const endDate = new Date(end_date);
  if (startDate > today) {
    return 'Awaiting';
  } else if (startDate < today && endDate > today) {
    return 'Ongoing';
  } else {
    return 'Finished';
  }
}

  constructor(public purchaseHistoryService: PurchaseHistoryService){}
}
