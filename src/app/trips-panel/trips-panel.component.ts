import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TripImporterService } from '../trip-importer.service';
import { TripComponent } from "../trip/trip.component";

@Component({
    selector: 'app-trips-panel',
    standalone: true,
    templateUrl: './trips-panel.component.html',
    styleUrl: './trips-panel.component.css',
    imports: [TripComponent, CommonModule],
    providers: [TripImporterService]

})
export class TripsPanelComponent {
    service: TripImporterService;

    constructor(service: TripImporterService) {
        this.service = service;
    }



}
