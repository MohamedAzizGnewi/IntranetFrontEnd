import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpHeaders ,HttpRequest } from '@angular/common/http';
const baseUrl = 'http://localhost:8900/api/solution';
@Injectable({
  providedIn: 'root'
})
export class SolutionService {
 
  create(data,id): Observable<any> {
    return this.http.post(`${baseUrl+"/solution"}/${id}`, data);
  }
  getAll(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  constructor(private http: HttpClient) { }
}
  