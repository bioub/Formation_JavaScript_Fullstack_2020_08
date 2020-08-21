import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GroupCreateComponent } from './group-create/group-create.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { GroupsListComponent } from './groups-list/groups-list.component';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups/groups.component';

@NgModule({
  declarations: [
    GroupsListComponent,
    GroupDetailsComponent,
    GroupCreateComponent,
    GroupsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    GroupsRoutingModule
  ],
})
export class GroupsModule {}
