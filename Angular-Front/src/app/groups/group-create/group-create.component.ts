import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.scss']
})
export class GroupCreateComponent implements OnInit {

  group = {
    name: '',
    description: '',
  };

  constructor(private groupService: GroupService, private router: Router) { }

  ngOnInit(): void {
  }

  send() {
    this.groupService.create(this.group).subscribe((group) => {
      this.groupService.events.emit('refresh');
      this.router.navigate(['groups', group['_id']]);
    });
  }

}
