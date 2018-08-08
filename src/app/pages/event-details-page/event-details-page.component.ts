import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { currentId } from 'async_hooks';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-event-details-page',
  templateUrl: './event-details-page.component.html',
  styleUrls: ['./event-details-page.component.css']
})
export class EventDetailsPageComponent implements OnInit {
  event: any;
  applications: any;
  showApplications = {
    'no-applications': true,
    'show-applications': false
  };

  constructor(private activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private router: Router,
    private authService: AuthService) {

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
            this.applications = result;
          });
      });

  }
  //   objectValue(object) {
  //     Object.values(object);
  //     console.log(object);
  //   }
}



