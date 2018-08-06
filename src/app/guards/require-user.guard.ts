import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RequireUserGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) { }

  canActivate(): Promise<any> {
    return this.authService.me()
      .then(user => {
        if (user) {
          return true;
        } else {
          this.router.navigateByUrl('/profile');
          return false;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }



}
