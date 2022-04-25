import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpHeaders ,HttpRequest } from '@angular/common/http';
const baseUrl = 'http://localhost:8900/api/file';
@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }
  getFile(id): Observable<any> {
    return this.http.get(`${baseUrl+"/file"}/${id}`);
  }
  getFiles(list){
    let array_url:any[]=[];

    let i=0;
    for (var val of list) {
      console.log(val)
     this.http.get(`${baseUrl+"/file"}/${val}`).subscribe(
        data => {
          array_url[i]=data;
       
          i++
          
          
        
        
       
          },
        
        error => {
          console.log(error);
        });
      
     
    }
    return array_url;
  }
  create(file: File,data,id): Observable<any> {
    const formdata: FormData = new FormData();
 
    formdata.append('file1', file);
    formdata.append('data', new Blob([JSON.stringify(data)], {
      type: "application/json"
  }));
    
    const req = new HttpRequest('POST', `${baseUrl+"/file"}/${id}`, formdata);
    
    return this.http.request(req);
  
  }
}
