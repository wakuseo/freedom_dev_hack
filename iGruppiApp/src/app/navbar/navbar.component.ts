import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logged = window.localStorage.getItem('AUTH_TOKEN') != null;

  constructor() { }

  showForm = false;

  ngOnInit() {
  }

  showLogin() {
    console.log('auth-key: ' + window.localStorage.getItem('AUTH_TOKEN'));
    this.toggleLogin();
  }

  toggleLogin() {
    this.showForm = !this.showForm;
  }

  /* hideLoginButton($event?: Event) {
    this.logged = true;
  } */

  logout() {
    this.logged = false;
    window.localStorage.clear();
    window.location.href = 'http://localhost:4200/homepage';
  }
}
