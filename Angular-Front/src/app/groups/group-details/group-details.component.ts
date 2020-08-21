import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss'],
})
export class GroupDetailsComponent implements OnInit {

  group;
  loading = false;

  constructor(
    private groupService: GroupService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe((paramMap) => {
    //   this.contactService.getById(paramMap.get('id')).subscribe((data) => {
    //     this.contact = data;
    //   });
    // });

    this.activatedRoute.paramMap.pipe(
      tap(() => this.loading = true),
      map((paramMap) => paramMap.get('id')),
      switchMap((id) => this.groupService.getById(id))
    ).subscribe((data) => {
      this.group = data;
      this.loading = false;
    });
  }
}
