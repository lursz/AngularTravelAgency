import { Routes } from '@angular/router';
import { TripsPanelComponent } from './trips-panel/trips-panel.component';
import { HomeComponent } from './home/home.component';
import { TripCreatorComponent } from './trip-creator/trip-creator.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'trip-panel', component: TripsPanelComponent },
    { path: 'creator', component: TripCreatorComponent },
    // { path: 'cart', component: CartComponent },
    // { path: 'history', component: ShoppingHistoryComponent },
    { path: '**', redirectTo: '' }
  ];