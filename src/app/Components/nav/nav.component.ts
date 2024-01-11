import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MoneyComponent} from "../money/money.component";
import { TripCountingService } from '../../Services/trip-counting.service';


@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  imports: [RouterLink, RouterLinkActive, MoneyComponent]
})
export class NavComponent {

  constructor(public tripCountingService: TripCountingService) {}

}
