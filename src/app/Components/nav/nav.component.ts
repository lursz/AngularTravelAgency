import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MoneyComponent} from "../money/money.component";


@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  imports: [RouterLink, RouterLinkActive, MoneyComponent]
})
export class NavComponent {

}
