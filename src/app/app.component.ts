import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TripsPanelComponent} from "./Components/trips-panel/trips-panel.component";
import {NavComponent} from "./Components/nav/nav.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, TripsPanelComponent, TripsPanelComponent, NavComponent]
})
export class AppComponent {
  title = 'TravelAgency';

}
