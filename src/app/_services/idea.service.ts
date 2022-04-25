import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders ,HttpRequest } from '@angular/common/http';
const baseUrl = 'http://localhost:8900/api/idea';
@Injectable({
  providedIn: 'root'
})
export class IdeaService {
  getAll(val): Observable<any> {
  
    return this.http.get(`${baseUrl+"/all5"}/${val}`);
    
  }
  save(id_user,id_idea): Observable<any> {
    
    return this.http.post(`${baseUrl+"/save2"}/${id_user}/${id_idea}`, null);
  }
  delete(id_user,id_idea): Observable<any> {
    
    return this.http.delete(`${baseUrl+"/delete"}/${id_user}/${id_idea}`);
  }
  constructor(private http: HttpClient) { }
}
