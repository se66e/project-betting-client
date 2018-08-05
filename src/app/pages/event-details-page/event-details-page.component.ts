import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';


@Component({
  selector: 'app-event-details-page',
  templateUrl: './event-details-page.component.html',
  styleUrls: ['./event-details-page.component.css']
})
export class EventDetailsPageComponent implements OnInit {
  eventId: string;
  event: any;

  constructor(private activatedRoute: ActivatedRoute, private eventService: EventService, private router: Router) {
    this.activatedRoute.params
      .subscribe((params) => {
        this.eventId = params.id;
        this.eventService.getOne(this.eventId)
          .then((event) => {
            this.event = event;
          })
          .catch((err) => {
            console.log(err);
          });

      });
  }

  ngOnInit() {
  }

}



