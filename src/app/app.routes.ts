import { Routes } from '@angular/router';
import { TripsPanelComponent } from './Components/trips-panel/trips-panel.component';
import { HomeComponent } from './Components/home/home.component';
import { TripCreatorComponent } from './Components/trip-creator/trip-creator.component';
import { CartComponent } from './Components/cart/cart.component';
import { PurchaseHistoryComponent } from './Components/purchase-history/purchase-history.component';
import { TripViewComponent } from './Components/trip-view/trip-view.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'trip-panel', component: TripsPanelComponent },
    { path: 'trip-panel/:id', component: TripViewComponent },
    { path: 'creator', component: TripCreatorComponent },
    { path: 'cart', component: CartComponent },
    { path: 'history', component: PurchaseHistoryComponent },
    { path: '**', redirectTo: '' }
  ];
