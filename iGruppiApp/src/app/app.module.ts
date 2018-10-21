import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    component: HomeComponent
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
    FooterComponent,
    MapComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    RouterModule.forRoot(routes)
=======
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
>>>>>>> d1a125f83c5dea15ff599599c1efe115835b5613
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
