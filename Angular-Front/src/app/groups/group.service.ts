import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  events = new EventEmitter<string>();

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(environment.apiBaseUrl + '/api/groups');
  }

  getById(id) {
    return this.httpClient.get(environment.apiBaseUrl + '/api/groups/' + id);
  }

  create(group) {
    return this.httpClient.post(environment.apiBaseUrl + '/api/groups', group, {
      headers: {
        'Authorization': 'd4973653-9895-4123-a7dd-3e1387d0fbde'
      }
    });
  }
}
