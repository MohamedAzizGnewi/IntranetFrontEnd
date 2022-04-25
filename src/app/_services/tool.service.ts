import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders ,HttpRequest } from '@angular/common/http';
const baseUrl = 'http://localhost:8900/api/tool';
@Injectable({
  providedIn: 'root'
})  
export class ToolService {
  getAll(id): Observable<any> {    
    return this.http.get(`${baseUrl+"/tools"}/${id}`);
  }
  getAll2(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  update(SolutionId,ToolId,link): Observable<any> {
    const formdata: FormData = new FormData();
       
   
    formdata.append('link', link);
  
    
    const req = new HttpRequest('PUT', `${baseUrl}/${SolutionId}/${ToolId}`, formdata);
    
    return this.http.request(req);
  }
  update2(DepartementId,ToolId,link): Observable<any> {
    const formdata: FormData = new FormData();
     
   
    formdata.append('link', link);
  
    
    const req = new HttpRequest('PUT', `${baseUrl+"/update"}/${DepartementId}/${ToolId}`, formdata);
    
    return this.http.request(req);
  }
  create(file: File,tool,link,SolutionId,DepartementId): Observable<any> {
    const formdata: FormData = new FormData();
 
    formdata.append('image', file);
    formdata.append('link', link);
    formdata.append('tool', new Blob([JSON.stringify(tool)], {
      type: "application/json"
  }));
    
    const req = new HttpRequest('POST', `${baseUrl+"/tool"}/${SolutionId}/${DepartementId}`, formdata);
    
    return this.http.request(req);
  
  }
  create3(file: File,tool,link,DepartementId): Observable<any> {
    const formdata: FormData = new FormData();
 
    formdata.append('image', file);
    formdata.append('link', link);
    formdata.append('tool', new Blob([JSON.stringify(tool)], {
      type: "application/json"
  }));
    
    const req = new HttpRequest('POST', `${baseUrl+"/tool"}/${DepartementId}`, formdata);
    
    return this.http.request(req);
  
  }
  create2(link,ToolId,SolutionId,DepartementId): Observable<any> {
    const formdata: FormData = new FormData();
 
    formdata.append('link', link);
 
    
    const req = new HttpRequest('POST', `${baseUrl+"/tool2"}/${ToolId}/${SolutionId}/${DepartementId}`, formdata);
    
    return this.http.request(req);
  
  }
  delete(id_tool): Observable<any> {
    
    return this.http.delete(`${baseUrl+"/delete"}/${id_tool}`);
  }
  constructor(private http: HttpClient) { }
}
