import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface TokenResponse {
  status: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static URL = 'http://c1b1744d.ngrok.io/api/login';
  response: TokenResponse = null;

  constructor(private http: HttpClient) {
  }

  callService(
    email: string,
    password: string,
    callback
  ) {
    console.log('Request: ' + AuthService.URL + '?email=' + email + '&passwd=' + password);
    this.http.get(AuthService.URL + '?email=' + email + '&passwd=' + password)
      .subscribe((data: TokenResponse) => this.saveToken(data, callback));
  }

  saveToken(token: TokenResponse, callback) {
    console.log('Valore del token: ' + JSON.stringify(token));
    new Promise(function (resolve, reject) {
      setTimeout(() => { }, 2000);
      if (token != null) {
        window.localStorage.setItem('AUTH_TOKEN', String(token.token));
        resolve(token.token);
      } else {
        window.localStorage.setItem('AUTH_TOKEN', null);
        setTimeout(() => { }, 2000);
        resolve(null);
      }
      reject(null);
    }).then(callback);
  }

}
