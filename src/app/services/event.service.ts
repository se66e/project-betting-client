
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private user: any;
  private userChange: Subject<any> = new Subject();

  private baseUrl = 'http://localhost:3000/events';

  userChange$: Observable<any> = this.userChange.asObservable();

  newEvent: any;

  constructor(private httpClient: HttpClient, private router: Router) { }

  setUser(user?: any) {
    this.user = user;
    this.userChange.next(user);
    return user;
  }

  getAll() {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}`, options)
      .toPromise();
  }

  getOne(id: String) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/${id}`, options)
      .toPromise();
  }

  createOne(name: String, category: any, details: any, applications: Array<Object>, location: String, date: Date) {
    const options = {
      withCredentials: true
    };
    const data = {
      name: name,
      category: category,
      details: details,
      location: location,
      date: date,
      applications: applications
    };

    return this.httpClient.post(`${this.baseUrl}`, data, options)
      .toPromise();
  }
  getMyEvents() {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/my-events`, options)
      .toPromise();
  }

  edit(id: any, name: string) {
    const options = {
      withCredentials: true
    };
    const data = {
      name: name,
      id: this.user
      // category: category,
      // details: details,
      // location: location,
      // date: date,
      // applications: applications
    };

    return this.httpClient.post(`${this.baseUrl}/:id`, data, options)
      .toPromise();
  }
  apply(rejected: boolean, accepted: boolean, pending: boolean) {
    const options = {
      withCredentials: true
    };
    const data = {
      rejected: rejected,
      accepted: accepted,
      pending: pending
    };
    return this.httpClient.post(`${this.baseUrl}/:id/applications`, data, options)
      .toPromise();
  }
}



// , category: any, details: string, location: string, date: Date, applications: any
