import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-events-page',
  templateUrl: './list-events-page.component.html',
  styleUrls: ['./list-events-page.component.css']
})
export class ListEventsPageComponent implements OnInit {
  eventList: any;

  constructor(private eventService: EventService, private router: Router) {

    eventService.getAll()
      .then((result) => {
        this.eventList = result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  ngOnInit() {
  }
}



