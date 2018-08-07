import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: any;
  private userChange: Subject<any> = new Subject();

  private baseUrl = environment.apiUrl + 'auth';

  userChange$: Observable<any> = this.userChange.asObservable();

  constructor(private httpClient: HttpClient) { }

  private setUser(user?: any) {
    this.user = user;
    this.userChange.next(user);
    return user;
  }

  me() {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/me`, options)
      .toPromise()
      .then((user) => this.setUser(user))
      .catch((err) => {
        if (err.status === 404) {
          this.setUser();
          return null;
        } else {
          Promise.reject(new Error('unexpected error'));
        }
      });
  }
  signup(username: string, password: string, email: string) {
    const options = {
      withCredentials: true
    };
    const data = {
      username,
      password,
      email
    };
    return this.httpClient.post(`${this.baseUrl}/signup`, data, options)
      .toPromise()
      .then((result) => this.setUser(result));
  }
  login(username: string, password: string) {
    const options = {
      withCredentials: true
    };
    const data = {
      username,
      password
    };
    return this.httpClient.post(`${this.baseUrl}/login`, data, options)
      .toPromise()
      .then((result) => this.setUser(result));
  }
  logout() {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}/logout`, {}, options)
      .toPromise()
      .then(() => this.setUser());
  }

  getMy() {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/profile`, options)
      .toPromise()
      .then((result) => this.setUser(result));
  }
}
