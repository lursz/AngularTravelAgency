import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TripsPanelComponent } from "./trips-panel/trips-panel.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, TripsPanelComponent, TripsPanelComponent]
})
export class AppComponent {
  title = 'TravelAgency';

}
