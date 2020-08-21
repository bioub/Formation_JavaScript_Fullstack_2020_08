import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';
import { flatMap, map, switchMap, tap } from 'rxjs/operators'

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {

  contact;
  loading = false;

  constructor(
    private contactService: ContactService,
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
      switchMap((id) => this.contactService.getById(id))
    ).subscribe((data) => {
      this.contact = data;
      this.loading = false;
    });
  }
}
