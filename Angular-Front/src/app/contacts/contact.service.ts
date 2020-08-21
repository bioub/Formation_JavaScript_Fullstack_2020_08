import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { orderBy } from 'lodash-es';
import { delay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  events = new EventEmitter<string>();

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(environment.apiBaseUrl + '/api/contacts').pipe(
      map((data) => orderBy(data, ['lastName', 'firstName']))
    );
  }

  getById(id) {
    const obs$ = this.httpClient.get(environment.apiBaseUrl + '/api/contacts/' + id);

    if (id === '5f3e3ee0303b1249f347331e') {
      return obs$.pipe(
        delay(4000),
      );
    }

    return obs$;
  }

  create(contact) {
    return this.httpClient.post(environment.apiBaseUrl + '/api/contacts', contact, {
      headers: {
        'Authorization': 'd4973653-9895-4123-a7dd-3e1387d0fbde'
      }
    });
  }
}
