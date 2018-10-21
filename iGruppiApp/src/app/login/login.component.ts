import { Component, OnInit, Input} from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() email: string;
  @Input() password: string;
  err: string = null;
  loader = false;
  loginForm = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(mail: string,
    passwd: string) {
    this.loader = true;
    this.loginForm = false;
    this.authService.callService(mail, passwd, (data) => {
      if (data == null) {
        this.loader = false;
        this.loginForm = true;
        this.err = 'Login non valido!';
      } else {
        this.loginForm = false;
        this.loader = false;
        window.location.href = 'http://localhost:4200/dashboard';
      }
    });
  }
}
