import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RequireAnonGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private location: Location
  ) { }

  canActivate(): Promise<any> {
    return this.authService.me()
      .then((user) => {
        if (user) {
          this.location.back();
          return false;
        } else {
          return true;
        }
      })
      .catch((err) => {
        console.log(err);
      });

  }

}
