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

    safeGetMapValue(Map: Map<number, TripCountingState>, key: number): TripCountingState {
        let value = Map.get(key);
        if (value)
            return value;
        return new TripCountingState(0, undefined, undefined);
    }

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


    /* -------------------------------- Functions ------------------------------- */

    removeTrip(tripId: number) {
        console.log(tripId);
        this.trips.splice(tripId, 1);
        this.tripsMap.delete(tripId);
    }

    findTopPrice(){
        let topPrice = 0;
        this.trips.forEach(trip => {
            if (trip.price > topPrice)
                topPrice = trip.price;
        });
        this.trips.forEach(trip => {
            if (trip.price == topPrice) {
                const tripCountingState = this.tripsMap.get(trip.id);
                if (tripCountingState) {
                    tripCountingState.highestPrice = true;
                    console.log(tripCountingState.highestPrice)
                }
            }
        });
    }



    


}


