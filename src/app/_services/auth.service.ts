import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8900/api/auth/';
const baseUrl = 'http://localhost:8900/api/auth';
import {HttpRequest } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }
  create(data,DepartementId): Observable<any> {
    const formdata: FormData = new FormData();
 
  
    formdata.append('signUpRequest', new Blob([JSON.stringify(data)], {
      type: "application/json"
  }));
    
    const req = new HttpRequest('POST', `${baseUrl+"/signup3"}/${DepartementId}`, formdata);
    
    return this.http.request(req);
  
  }
  update(data,DepartementId,UserId): Observable<any> {
    const formdata: FormData = new FormData();
 
  
    formdata.append('signUpRequest', new Blob([JSON.stringify(data)], {
      type: "application/json"
  }));
    
    const req = new HttpRequest('PUT', `${baseUrl+"/update"}/${DepartementId}/${UserId}`, formdata);
    
    return this.http.request(req);
  
  }
  update2(data,UserId): Observable<any> {
    const formdata: FormData = new FormData();
 

    formdata.append('userMessage2', new Blob([JSON.stringify(data)], {
      type: "application/json"
  }));
    
    const req = new HttpRequest('PUT', `${baseUrl+"/update2"}/${UserId}`, formdata);
    
    return this.http.request(req);
  
  }
  update3(image,UserId): Observable<any> {
    const formdata: FormData = new FormData();
 
    formdata.append('image', image);

    
    const req = new HttpRequest('PUT', `${baseUrl+"/update3"}/${UserId}`, formdata);
    
    return this.http.request(req);
  
  }
  register(firstName: string,lastName: string,username: string,  password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      firstName,
      lastName,
      username,
      password
    }, httpOptions);
  }
}
