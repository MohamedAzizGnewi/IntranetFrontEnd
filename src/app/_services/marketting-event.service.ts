import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders ,HttpRequest } from '@angular/common/http';
const baseUrl = 'http://localhost:8900/api/event';
@Injectable({
  providedIn: 'root'
})
export class MarkettingEventService {
  getAll(): Observable<any> {    
    return this.http.get(`${baseUrl+"/all5"}`);
  }
  getEvent(id): Observable<any> {    
    return this.http.get(`${baseUrl}/${id}`);
  }
  get(id): Observable<any> {    
    return this.http.get(`${baseUrl+"/all5"}/${id}`);
  }
  getAll2(id_user): Observable<any> {    
    return this.http.get(`${baseUrl+"/all6"}/${id_user}`);
  } 
  constructor(private http: HttpClient) { }

  create(image: File,event): Observable<any> {
    const formdata: FormData = new FormData();
 
    formdata.append('image1', image);
    formdata.append('event', new Blob([JSON.stringify(event)], {
      type: "application/json"
  }));
    
    const req = new HttpRequest('POST', `${baseUrl+"/add"}`, formdata);
    
    return this.http.request(req);
  
  }
  getAllVisibility(visibility): Observable<any>
  {
    return this.http.get(`${baseUrl+"/allVisibility"}/${visibility}`);

  }
  update(event,id): Observable<any> {
    const formdata: FormData = new FormData();
 
   
    formdata.append('event', new Blob([JSON.stringify(event)], {
      type: "application/json"
  }));
    
    const req = new HttpRequest('PUT', `${baseUrl+"/update"}/${id}`, formdata);
    
    return this.http.request(req);
  
  }
  save(id_user,id_event): Observable<any> {
    
    return this.http.post(`${baseUrl+"/save2"}/${id_user}/${id_event}`, null);
  }
  delete(id_user,id_event): Observable<any> {
    
    return this.http.delete(`${baseUrl+"/delete"}/${id_user}/${id_event}`);
  }
  delete2(id_event): Observable<any> {
    
    return this.http.delete(`${baseUrl+"/delete"}/${id_event}`);
  }
}
  