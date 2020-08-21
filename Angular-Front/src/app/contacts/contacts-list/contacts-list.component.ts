import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit {
  // private contactService: ContactService;

  // constructor(contactService: ContactService) {
  //   this.contactService = contactService;
  // }

  contacts;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    // requete AJAX
    // const httpHandler = new HttpHandler();
    // const httpClient = new HttpClient();
    // injector : Dependency Injection Container
    // injector.get('HttpClient')
    this.getContacts();

    this.contactService.events
      .pipe(
        filter((event) => event === 'refresh')
      ).subscribe(() => {
        this.getContacts();
      });
  }

  private getContacts() {
    this.contactService.getAll().subscribe((data) => {
      this.contacts = data;
    });
  }
}
