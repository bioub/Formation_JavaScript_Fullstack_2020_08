import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss'],
})
export class GroupsListComponent implements OnInit {
  // private contactService: ContactService;

  // constructor(contactService: ContactService) {
  //   this.contactService = contactService;
  // }

  groups;

  constructor(private groupService: GroupService) {}

  ngOnInit(): void {
    // requete AJAX
    // const httpHandler = new HttpHandler();
    // const httpClient = new HttpClient();
    // injector : Dependency Injection Container
    // injector.get('HttpClient')
    this.getGroups();

    this.groupService.events
      .pipe(
        filter((event) => event === 'refresh')
      ).subscribe(() => {
        this.getGroups();
      });
  }

  private getGroups() {
    this.groupService.getAll().subscribe((data) => {
      this.groups = data;
    });
  }
}
