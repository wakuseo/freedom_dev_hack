import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) { }

  showForm = false;

  ngOnInit() {
  }

  showLogin() {
    this.authService.callService('email1@igruppi.com', 'passwd-1');
    console.log('auth-key: ' + window.localStorage.getItem('AUTH_TOKEN'));
    this.toggleLogin();
  }

  toggleLogin() {
    this.showForm = !this.showForm;
  }
}
