import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
// import { MapComponent } from './map/map.component';
import { LeafletModule } from 'node_modules/@asymmetrik/ngx-leaflet/dist';
import { Routes, RouterModule } from 'node_modules/@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarComponent,
    FooterComponent,
    // MapComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
