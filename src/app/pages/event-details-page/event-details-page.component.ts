import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';


@Component({
  selector: 'app-event-details-page',
  templateUrl: './event-details-page.component.html',
  styleUrls: ['./event-details-page.component.css']
})
export class EventDetailsPageComponent implements OnInit {
  event: any;
  application: any;
  showApplications = {
    'no-applications': true,
    'show-applications': false
  };

  constructor(private activatedRoute: ActivatedRoute, private eventService: EventService, private router: Router) {
    this.activatedRoute.params
      .subscribe((params) => {
        this.eventService.getOne(params.id)
          .then((result) => {
            this.event = result;
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
      });
  }

  ngOnInit() {
  }

  handleApplyClick() {
    this.activatedRoute.params
      .subscribe((params) => {
        this.eventService.apply(params.id)
          .then((result) => {
            console.log(result);
          });
      });
    this.showApplications = {
      'no-applications': false,
      'show-applications': true
    };
  }

}
