import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8900/api/directory';
@Injectable({
  providedIn: 'root'
})

export class DirectoryService {  

  constructor(private http: HttpClient) { }

  
  getAll(): Observable<any> {
    return this.http.get(baseUrl+"/departments");
  }
  getAll2(id): Observable<any> {
    return this.http.get(`${baseUrl+"/directory/permission"}/${id}`);
  }
  getDirectorys(): Observable<any> {
    return this.http.get(baseUrl+"/directorys");
  }
  create(data): Observable<any> {
    return this.http.post(baseUrl+"/insert2", data);
  }

}
