import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    ContactsListComponent,
    ContactDetailsComponent,
    ContactCreateComponent,
    ContactsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContactsRoutingModule
  ],
})
export class ContactsModule {}
