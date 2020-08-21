import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    ContactsListComponent,
    ContactDetailsComponent,
    ContactCreateComponent,
    ContactsComponent,
  ],
  imports: [CommonModule, ContactsRoutingModule],
})
export class ContactsModule {}
