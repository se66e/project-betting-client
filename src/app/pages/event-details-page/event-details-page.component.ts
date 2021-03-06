import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-event-details-page',
  templateUrl: './event-details-page.component.html',
  styleUrls: ['./event-details-page.component.css']
})
export class EventDetailsPageComponent implements OnInit {
  currentUser: any;
  reject: any;
  accept: any;
  error: any;
  event: any;
  applications: any;
  apply = {
    'no-applications': false,
    'show-applications': true
  };

  constructor(private activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private router: Router,
    private authService: AuthService,
  ) {

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

    this.authService.me()
      .then((result) => {
        this.currentUser = result;
      });
  }

  ngOnInit() {
  }

  handleApplyClick(appId) {
    this.activatedRoute.params
      .subscribe((params) => {
        this.eventService.apply(params.id)
          .then((result) => {
            this.applications = result;
            this.apply = {
              'no-applications': true,
              'show-applications': false
            };
          })
          .catch((err) => {
            this.error = err;
          });
      });

  }
  handleAcceptClick(appId) {
    this.activatedRoute.params
      .subscribe((params) => {
        this.eventService.accept(params.id, appId);
      });
  }

  handleRejectClick(appId) {
    this.activatedRoute.params
      .subscribe((params) => {
        this.eventService.reject(params.id, appId);
      });
  }
}



