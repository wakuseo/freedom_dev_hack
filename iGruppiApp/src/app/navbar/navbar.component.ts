import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  showForm = false;

  ngOnInit() {
  }

  showLogin() {
    console.log('Click!!');
    this.toggleLogin();
  }

  toggleLogin() {
    this.showForm = !this.showForm;
  }
}
