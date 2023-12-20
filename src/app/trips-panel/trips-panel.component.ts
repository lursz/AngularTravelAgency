import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TripImporterService } from '../trip-importer.service';
import { TripComponent } from "../trip/trip.component";
import { Trip } from '../trip/trip_interface';
import { TripCountingState } from './trip-counting.service';
import { find } from 'rxjs';

@Component({
    selector: 'app-trips-panel',
    standalone: true,
    templateUrl: './trips-panel.component.html',
    styleUrl: './trips-panel.component.css',
    providers: [TripImporterService],
    imports: [TripComponent, CommonModule]
})
export class TripsPanelComponent {
    service: TripImporterService;
    trips: Trip[] = [];
    tripsMap: Map<number, TripCountingState> = new Map<number, TripCountingState>();

    init(service: TripImporterService){
        this.trips = this.service.getTrips();
        for (let i = 0; i < this.trips.length; i++) {
            this.tripsMap.set(i, new TripCountingState(0, undefined, undefined));
        }
    }
    constructor(service: TripImporterService) {
        this.service = service;
        this.service.eventEmitter.subscribe(() => {
            this.init(service);
        });
        this.init(service);
        this.findTopPrice();
    }



    findTopPrice(){
        let keys = Array.from(this.tripsMap.keys());
        let topPrice = Math.max(...keys);
        let tripCountingState = this.tripsMap.get(topPrice);
        if (tripCountingState) {
          tripCountingState.highestPrice = true;
        } else {
          this.tripsMap.set(topPrice, new TripCountingState(0, undefined, true));
        }
        console.log("topPrice: " + topPrice);
    }



    


}


