import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../services/event.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInitGuard implements CanActivate {

  constructor(
    private router: Router,
    private eventService: EventService
  ) { }

  canActivate(): Promise<any> {
    return this.eventService.getAll()
      .then(() => {
        return true;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

