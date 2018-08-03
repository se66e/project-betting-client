import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event-page',
  templateUrl: './create-event-page.component.html',
  styleUrls: ['./create-event-page.component.css']
})
export class CreateEventPageComponent implements OnInit {
  name: String;
  // category: Object;
  details: any;
  location: String;
  date: Date;
  owner: String;
  applications: any;
  showForm = false;
  newEvent: any;
  categoryEnum: Array<string>;

  constructor(private eventService: EventService, private router: Router) {
  }

  ngOnInit() {
    this.categoryEnum = ['poker', 'fifa', 'racketgames', 'golf', 'football', 'other'];
  }

  handleCreateClick(event) {
    if (event.valid) {
      this.eventService.createOne(this.name, this.categoryEnum, this.details, this.owner, this.applications, this.location, this.date)
        .then((result) => {
          this.newEvent = result;
          this.showForm = false;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

}
