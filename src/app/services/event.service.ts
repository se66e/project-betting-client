
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class EventService {

  private user: any;
  private userChange: Subject<any> = new Subject();

  private baseUrl = environment.apiUrl + '/events';

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

    return this.httpClient.post(`${this.baseUrl}/${id}`, data, options)
      .toPromise();
  }

  apply(id) {
    console.log(id);
    const options = {
      withCredentials: true
    };
    console.log(`${this.baseUrl}/${id}/apply`);
    return this.httpClient.post(`${this.baseUrl}/${id}/apply`, null, options)
      .toPromise();
  }

  accept(eventId, applicationId) {
    const options = {
      withCredentials: true
    };
    const data = {
      eventId,
      applicationId
    };

    return this.httpClient.put(`${this.baseUrl}/${eventId}/accept`, data, options)
      .toPromise();
  }

  reject(eventId, applicationId) {
    const options = {
      withCredentials: true
    };
    const data = {
      eventId,
      applicationId
    };
    return this.httpClient.put(`${this.baseUrl}/${eventId}/reject`, data, options)
      .toPromise();
  }
  applications(applications) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${this.baseUrl}/my-applications`, options)
      .toPromise();
  }

}


// apply(rejected: boolean, accepted: boolean, pending: boolean) {
//   const options = {
//     withCredentials: true
//   };
//   const data = {
//     rejected: rejected,
//     accepted: accepted,
//     pending: pending
//   };
//   return this.httpClient.post(`${this.baseUrl}/:id/apply`, data, options)
//     .toPromise();
// }



// , category: any, details: string, location: string, date: Date, applications: any

