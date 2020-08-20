import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

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
