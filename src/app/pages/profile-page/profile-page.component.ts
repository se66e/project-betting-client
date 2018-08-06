import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  myEvents: any;
  eventId: any;
  category: any;
  name: string;
  location: string;
  details: string;
  applications: any;
  date: Date;
  showForm = false;
  user: any;

  constructor(
    private authService: AuthService,
    private eventService: EventService,
    private activatedRoute: ActivatedRoute
  ) {

    this.eventService.getMyEvents()
      .then((result) => {
        console.log(result);
        this.myEvents = result;
      });
  }

  ngOnInit() {
  }


  hanldeEditClick() {
    this.activatedRoute.params
      .subscribe((params) => {
        this.eventId = params.id;
        this.eventService.edit(this.eventId, this.name)
          .then((result) => {
            this.myEvents.update(result);
            this.showForm = false;
          })
          .catch((err) => {
            console.log(err);
          });
      });
  }

}



// , this.details, this.location, this.category, this.applications, this.date

