import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupCreateComponent } from './group-create/group-create.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { GroupsComponent } from './groups/groups.component';

const routes: Routes = [
  {
    path: '',
    component: GroupsComponent,
    children: [
      {
        path: 'create',
        component: GroupCreateComponent,
      },
      {
        path: ':id',
        component: GroupDetailsComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
