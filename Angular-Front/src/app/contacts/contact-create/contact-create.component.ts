import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss']
})
export class ContactCreateComponent implements OnInit {

  contact = {
    firstName: '',
    lastName: '',
    email: '',
  };

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
  }

  send() {
    this.contactService.create(this.contact).subscribe((contact) => {
      this.contactService.events.emit('refresh');
      this.router.navigate(['contacts', contact['_id']]);
    });
  }

}
