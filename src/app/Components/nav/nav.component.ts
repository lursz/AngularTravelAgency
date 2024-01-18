import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MoneyComponent} from "../money/money.component";
import { TripCountingService } from '../../Services/trip-counting.service';
import {AuthService} from "../../Services/auth.service";
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  imports: [RouterLink, RouterLinkActive, MoneyComponent, NgIf]
})
export class NavComponent {

  constructor(public tripCountingService: TripCountingService, public authService: AuthService) {}

}
