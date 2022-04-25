import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders ,HttpRequest } from '@angular/common/http';
const baseUrl = 'http://localhost:8900/api/actuality';

@Injectable({
  providedIn: 'root'
})
export class ActualityService {

      
  create(files:FileList,data,id): Observable<any> {
    const formdata: FormData = new FormData();
 
    
    for (let i = 0; i < files.length; i++) {
      formdata.append('images', files[i])
    }
    formdata.append('actuality', new Blob([JSON.stringify(data)], {
      type: "application/json"
  }));
    
    const req = new HttpRequest('POST', `${baseUrl+"/actuality"}/${id}`, formdata);
    
    return this.http.request(req);
  
  }
  comment(id_actuality,id_user,comment): Observable<any> {
    const formdata: FormData = new FormData();
 
    formdata.append('comment', comment)
   

    const req = new HttpRequest('PUT', `${baseUrl+"/comment"}/${id_actuality}/${id_user}`, formdata);
    
    return this.http.request(req);
  
  }
  like(id_actuality,id_user): Observable<any> {
    const formdata: FormData = new FormData();
 
  
   

    const req = new HttpRequest('PUT', `${baseUrl+"/like"}/${id_actuality}/${id_user}`, formdata);
    
    return this.http.request(req);
  
  }
  delete_like(id_actuality,id_user): Observable<any> {
    
    return this.http.delete(`${baseUrl+"/like"}/${id_actuality}/${id_user}`);
  }
  delete(id_actuality): Observable<any>
  {
    return this.http.delete(`${baseUrl+"/delete"}/${id_actuality}`);  
  }
  getAll(): Observable<any> {
    const req = new HttpRequest('GET', `${baseUrl}`);
    
    return this.http.request(req);
  }
  getAll2(v1): Observable<any> {
    const formdata: FormData = new FormData();
 
    
    
     
    return this.http.get(`${baseUrl+"/visibility"}/${v1}`);

  }
  getAll3(v1,val): Observable<any> {
    const formdata: FormData = new FormData();
     
    
    
     
    return this.http.get(`${baseUrl+"/visibility2"}/${v1}/${val}`);

  }
  constructor(private http: HttpClient) { }
}
  