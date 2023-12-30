import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TripImporterService } from '../../Services/trip-importer.service';
import { TripComponent } from "../trip/trip.component";
import { Trip } from '../trip/trip_interface';
import { TripCountingState } from '../../Services/trip-counting.service';
import { find, max } from 'rxjs';
import { TripsDbService } from '../../Services/trips-db.service';
import { TripsCounterComponent } from "../trips-counter/trips-counter.component";

@Component({
    selector: 'app-trips-panel',
    standalone: true,
    templateUrl: './trips-panel.component.html',
    styleUrl: './trips-panel.component.css',
    providers: [TripImporterService, TripsDbService],
    imports: [TripComponent, CommonModule, TripsCounterComponent]
})
export class TripsPanelComponent {

    constructor(public service: TripImporterService, public TripsDB: TripsDbService) {
    }



}
