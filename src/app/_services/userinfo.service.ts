import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpRequest } from '@angular/common/http';

const baseUrl = 'http://localhost:8900/api/user';
@Injectable({
  providedIn: 'root',
})
export class UserinfoService {
  getAll(id): Observable<any> {
    return this.http.get(`${baseUrl + '/user'}/${id}`);
  }
  getUsers(): Observable<any> {
    return this.http.get(`${baseUrl + '/users'}`);
  }
  getUser(v1): Observable<any> {
    const formdata: FormData = new FormData();

    return this.http.get(`${baseUrl + '/username'}/${v1}`);
  }
  getUserinfo(v1): Observable<any> {
    const formdata: FormData = new FormData();

    return this.http.get(`${baseUrl + '/username3'}/${v1}`);
  }
  getUser3(id): Observable<any> {
    const formdata: FormData = new FormData();

    return this.http.get(`${baseUrl + '/user2'}/${id}`);
  }
  getUser2(v1): Observable<any> {
    const formdata: FormData = new FormData();

    return this.http.get(`${baseUrl + '/username2'}/${v1}`);
  }
  getUsesbirthday(): Observable<any> {
    return this.http.get(`${baseUrl + '/users/birthday'}`);
  }
  getUsersRecruitments(): Observable<any> {
    return this.http.get(`${baseUrl + '/users/recruitments'}`);
  }
  getUserswork(): Observable<any> {
    return this.http.get(`${baseUrl + '/users/work'}`);
  }

  constructor(private http: HttpClient) {}
}
