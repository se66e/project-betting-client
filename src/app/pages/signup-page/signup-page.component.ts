import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  error = null;
  processing = false;
  feedbackEnabled = false;

  username: string;
  password: string;
  email: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    if (form.valid) {
      this.processing = true;
      this.authService.signup(this.username, this.password, this.email)
        .then((result) => {
          this.router.navigate(['/profile']);
        })
        .catch((err) => {
          this.error = err.error;
          this.processing = false;
        });
    } else {
      this.feedbackEnabled = true;
    }

  }

}
