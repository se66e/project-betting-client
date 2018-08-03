import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://localhost:3000/events';
  newEvent: any;

  constructor(private httpClient: HttpClient) { }

  getAll() {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}`, options)
      .toPromise();
  }

  getOne(id) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/id`, options)
      .toPromise();
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
      .toPromise();
  }
}



