import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static URL = 'htto://localhost/api/login'

  constructor(private http: HttpClient) { }

  callService(
        email: string,
        password: string
              ) {

    return this.http.get(AuthService.URL+ '?email=' + email + '&passwd=' + password).token;
  }

}
