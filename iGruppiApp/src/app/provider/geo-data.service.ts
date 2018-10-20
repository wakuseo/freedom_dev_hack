import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoDataService {
  constructor(private http: HttpClient) { }

  /*getGeoData(): Observable<any> {
    return this.http.get<any>(this.url);
  }*/
}
