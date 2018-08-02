
// ----- Modules ----- \\
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// ----- Services ----- \\
import { AuthService } from './services/auth.service';

// ----- Pages ----- \\
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

// ----- Guards ----- \\
import { RequireAnonGuard } from './guards/require-anon.guard';
import { RequireUserGuard } from './guards/require-user.guard';

// ----- Routes ----- \\
const routes: Routes = [
  { path: 'login', component: LoginPageComponent, canActivate: [RequireAnonGuard] },
  { path: 'signup', component: SignupPageComponent, canActivate: [RequireAnonGuard] },
  { path: 'profile', component: ProfilePageComponent, canActivate: [RequireUserGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    AuthService,
    RequireAnonGuard,
    RequireUserGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
