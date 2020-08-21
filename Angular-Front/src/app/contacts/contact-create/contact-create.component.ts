import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/groups/group.service';

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
    group: null,
  };

  groups;

  constructor(private contactService: ContactService, private groupService: GroupService, private router: Router) { }

  ngOnInit(): void {
    this.groupService.getAll().subscribe((data) => {
      this.groups = data;
    })
  }

  send() {
    this.contactService.create(this.contact).subscribe((contact) => {
      this.contactService.events.emit('refresh');
      this.router.navigate(['contacts', contact['_id']]);
    });
  }

}
