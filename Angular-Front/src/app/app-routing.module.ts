import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { HelloComponent } from './core/hello/hello.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'hello',
    component: HelloComponent,
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then((m) => m.ContactsModule)
  },
  {
    path: 'groups',
    loadChildren: () => import('./groups/groups.module').then((m) => m.GroupsModule)
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
