import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event-page',
  templateUrl: './create-event-page.component.html',
  styleUrls: ['./create-event-page.component.css']
})
export class CreateEventPageComponent implements OnInit {
  @Input() eventList;
  name: String;
  details: String;
  location: String;
  date: Date;
  owner: String;
  applications: any;
  category: any;
  showForm = false;

  constructor(private eventService: EventService, private router: Router) {
  }

  ngOnInit() {
  }

  handleCreateClick(event) {
    if (event.valid) {
      this.eventService.createOne(this.name, this.category, this.details, this.applications, this.location, this.date)
        .then((result) => {
          this.eventList.push(result);
          this.showForm = false;
          console.log(result);
          console.log('You just created an event named ' + this.name);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

}
