import { Routes } from '@angular/router';
import { TripsPanelComponent } from './Components/trips-panel/trips-panel.component';
import { HomeComponent } from './Components/home/home.component';
import { TripCreatorComponent } from './Components/trip-creator/trip-creator.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'trip-panel', component: TripsPanelComponent },
    { path: 'creator', component: TripCreatorComponent },
    // { path: 'cart', component: CartComponent },
    // { path: 'history', component: ShoppingHistoryComponent },
    { path: '**', redirectTo: '' }
  ];
