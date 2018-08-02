
// ----- Modules ----- \\
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// ----- Services ----- \\
import { AuthService } from './services/auth.service';
import { EventService } from './services/event.service';

// ----- Pages ----- \\
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ListEventsPageComponent } from './pages/list-events-page/list-events-page.component';
import { CreateEventPageComponent } from './pages/create-event-page/create-event-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

// ----- Guards ----- \\
import { RequireAnonGuard } from './guards/require-anon.guard';
import { RequireUserGuard } from './guards/require-user.guard';
import { AuthInitGuard } from './guards/auth-init.guard';

// ----- Routes ----- \\
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent, canActivate: [RequireAnonGuard] },
  { path: 'signup', component: SignupPageComponent, canActivate: [RequireAnonGuard] },
  { path: 'profile', component: ProfilePageComponent, canActivate: [RequireUserGuard] },
  { path: 'events', component: ListEventsPageComponent, canActivate: [AuthInitGuard] },

];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    ProfilePageComponent,
    ListEventsPageComponent,
    CreateEventPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    AuthService,
    EventService,
    RequireAnonGuard,
    RequireUserGuard,
    AuthInitGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
