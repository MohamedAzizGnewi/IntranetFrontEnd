import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders ,HttpRequest } from '@angular/common/http';
const baseUrl = 'http://localhost:8900/api/flash';

@Injectable({
  providedIn: 'root'
})
export class FlashService {
  create(file: File,data,id): Observable<any> {
    const formdata: FormData = new FormData();
 
    formdata.append('image', file);
  
    formdata.append('flashInfo', new Blob([JSON.stringify(data)], {
      type: "application/json"
  }));
    
    const req = new HttpRequest('POST', `${baseUrl}/${id}`, formdata);
    
    return this.http.request(req);
  
  }
  getAll(): Observable<any> {
    return this.http.get(`${baseUrl}`);
  }
  getAll2(v1): Observable<any> {
    return this.http.get(`${baseUrl+"/visibility"}/${v1}`);
  }
  constructor(private http: HttpClient) { }
}
  