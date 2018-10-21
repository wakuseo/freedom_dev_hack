import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  static URL = 'http://localhost/api/groups';

  constructor(private http: HttpClient) { }

  callService() {
    return this.http.get(GroupsService.URL);
  }

}
