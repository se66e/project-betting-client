import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private user: any;
  private userChange: Subject<any> = new Subject();

  private baseUrl = 'http://localhost:3000/events';

  userChange$: Observable<any> = this.userChange.asObservable();

  newEvent: any;

  constructor(private httpClient: HttpClient) { }

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
      .toPromise()
      .then((user) => this.setUser(user))
      .catch((err) => {
        if (err.status === 404) {
          this.setUser();
        }
      });
  }

  getOne(id) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/id`, options)
      .toPromise()
      .then((user) => this.setUser(user))
      .catch((err) => {
        if (err.status === 404) {
          this.setUser();
        }
      });
  }

  createOne(name: String, category: any, details: any, owner: String, applications: Array<Object>, location: String, date: Date) {
    const options = {
      withCredentials: true
    };

    const data = {
      name: name,
      categoryEnum: category,
      owner: owner,
      details: details,
      location: location,
      date: date,
      applications: applications
    };

    return this.httpClient.post(`${this.baseUrl}`, data, options)
      .toPromise()
      .then((user) => this.setUser(user))
      .catch((err) => {
        if (err.status === 404) {
          this.setUser();
        }
      });
  }
}
