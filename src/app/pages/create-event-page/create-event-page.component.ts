import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event-page',
  templateUrl: './create-event-page.component.html',
  styleUrls: ['./create-event-page.component.css']
})
export class CreateEventPageComponent implements OnInit {
  name: String;
  category: any;
  details: any;
  location: String;
  date: Date;
  owner: String;
  applications: any;
  showForm = false;

  constructor(private eventService: EventService, private router: Router) {
  }

  ngOnInit() {
  }

  handleCreateClick(event) {
    if (event.valid) {
      this.eventService.createOne(this.name, this.category, this.details, this.owner, this.applications, this.location, this.date)
        .then((result) => {
          this.showForm = false;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
