import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() showLogin = false;
  constructor() { }

  ngOnInit() {
  }

  toggleLogin() {
    this.showLogin = !this.showLogin;
  }

  login(email: string, password: string) {
    if (email && password) {

    }
  }
}
