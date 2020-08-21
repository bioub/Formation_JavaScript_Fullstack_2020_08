import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent,
    children: [
      {
        path: 'create',
        component: ContactCreateComponent,
      },
      {
        path: ':id',
        component: ContactDetailsComponent,
      },
    ]
  },
];

/*
Exercice :
Créer 3 routes
/contacts -> ContactsListComponent
-> template de ContactsList en HTML avec du faux-texte
-> liste de contacts et des liens vers ContactDetailsComponent
-> et un lien pour ajouter un contact
/contacts/create -> ContactCreateComponent
/contacts/:id -> ContactDetailsComponent
*/

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
