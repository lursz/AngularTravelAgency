import {Routes} from '@angular/router';
import {TripsPanelComponent} from './Components/trips-panel/trips-panel.component';
import {HomeComponent} from './Components/home/home.component';
import {TripCreatorComponent} from './Components/trip-creator/trip-creator.component';
import {CartComponent} from './Components/cart/cart.component';
import {PurchaseHistoryComponent} from './Components/purchase-history/purchase-history.component';
import {TripViewComponent} from './Components/trip-view/trip-view.component';
import {AngularFireModule} from '@angular/fire/compat';
import {environment} from '../environments/environment';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'trip-panel', component: TripsPanelComponent},
  {path: 'trip-panel/:id', component: TripViewComponent},
  {path: 'creator', component: TripCreatorComponent},
  {path: 'cart', component: CartComponent},
  {path: 'history', component: PurchaseHistoryComponent},
  {path: '**', redirectTo: ''}
];


@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ]
})
export class AppModule {
}

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes),
//     AngularFireModule.initializeApp(environment.firebaseConfig),
//     BrowserModule,
//     // AngularFireDatabaseModule
//   ],
//   exports: [
//     RouterModule
//   ]
// })
// export class AppRoutingModule { }
