import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';

@NgModule({
  declarations: [
    ContactsListComponent,
    ContactDetailsComponent,
    ContactCreateComponent,
  ],
  imports: [CommonModule, ContactsRoutingModule],
})
export class ContactsModule {}
