import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders ,HttpRequest } from '@angular/common/http';
import { map } from "rxjs/operators";
const baseUrl = 'http://localhost:8900/api/directory';
const BASE_URL ="https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc";
@Injectable({
  providedIn: 'root'
})
export class Directory2Service {
     

  constructor(private http: HttpClient) { }
    public fetchCategories(departement_id,solution_id): Observable<any[]> {
    return this.fetch(`${baseUrl+"/all/test"}/${departement_id}/${solution_id}`);
  }

  public fetchProducts(id: number): any {
    return this.fetch(`${baseUrl+"/files"}/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get(baseUrl+"/all");
  }
  getAll2(id): Observable<any> {
    return this.http.get(`${baseUrl+"/all"}/${id}`);
  }
  getAll3(id): Observable<any> {
    return this.http.get(`${baseUrl+"/all/departement"}/${id}`);
  }
  getAll4(departement_id,solution_id): Observable<any> {
    return this.http.get(`${baseUrl+"/all/test"}/${departement_id}/${solution_id}`);
  }
  getAll5(departement_id,solution_id): any {
    return this.fetch(`${baseUrl+"/all/test"}/${departement_id}/${solution_id}`);
  }
  getDirectorys(id): Observable<any> {
    return this.http.get(`${baseUrl+"/directorys2"}/${id}`);
  }
  getFiles(id): Observable<any> {
    return this.http.get(`${baseUrl+"/files"}/${id}`);
  }
   getPermissions(id): Observable<any> {
    return this.http.get(`${baseUrl+"/directory2/permission"}/${id}`);
  }
  create(data,id): Observable<any> {
    return this.http.post(`${baseUrl+"/directory2"}/${id}`, data);
  }
  deletefile(id) : Observable<any> {
    return this.http.delete(`${baseUrl+"/file"}/${id}`);
  }
  deletedirectory(id) : Observable<any> {
    return this.http.delete(`${baseUrl+"/delete3"}/${id}`);
  }
  create2(name,id): Observable<any> {
    const formdata: FormData = new FormData();
    
   
    formdata.append('link', name);
  
    
    const req = new HttpRequest('POST', `${baseUrl}/${id}`, formdata);
    
    return this.http.request(req);
  }
  private fetch(url: string): Observable<any[]> {
    return this.http
      .get(url)
      .pipe(map((response: any) => response.value));
  }
 
}
