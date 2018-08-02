import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  error = null;
  processing = false;
  feedbackEnabled = false;

  username: string;
  password: string;

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
      this.authService.login(this.username, this.password)
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
