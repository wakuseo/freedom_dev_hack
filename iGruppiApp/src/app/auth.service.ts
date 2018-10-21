import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

interface TokenResponse {
  status: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static URL = 'http://localhost/api/login';
  response: TokenResponse = null;

  constructor(private http: HttpClient) { }

  callService(
    email: string,
    password: string
  ): Observable<Object> {
    const obs: Observable<Object> = this.http.get(AuthService.URL + '?email=' + email + '&passwd=' + password);
    obs.subscribe((data: TokenResponse) => this.saveToken(data));
    return obs;
  }

  saveToken(token: TokenResponse) {
    console.log('Valore del token: ' + JSON.stringify(token));
    if (token != null) {
      window.localStorage.setItem('AUTH_TOKEN', String(token.token));
    } else {
      window.localStorage.setItem('AUTH_TOKEN', null);
    }
  }

}
