import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovementComponent } from './movement/movement.component';
import { ShopComponent } from './shop/shop.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { LeafletModule } from 'node_modules/@asymmetrik/ngx-leaflet/dist';
import { Routes, RouterModule } from 'node_modules/@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovementComponent,
    ShopComponent,
    DashboardComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LeafletModule.forRoot(),
    FooterComponent,
    MapComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
