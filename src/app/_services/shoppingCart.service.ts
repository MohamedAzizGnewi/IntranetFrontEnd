import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders ,HttpRequest } from '@angular/common/http';

const baseUrl = 'http://localhost:8900/api/shoppingCart';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  getAll(): Observable<any> {    
    return this.http.get(`${baseUrl+"/all5"}`);
  }
  getEvent(id): Observable<any> {    
    return this.http.get(`${baseUrl}/${id}`);
  }
  getAllVisibility(visibility): Observable<any>
  {
    return this.http.get(`${baseUrl+"/allVisibility"}/${visibility}`);

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
    formdata.append('itemCart', new Blob([JSON.stringify(event)], {
      type: "application/json"
  }));
    
    const req = new HttpRequest('POST', `${baseUrl+"/add"}`, formdata);
    
    return this.http.request(req);
  
  }
  create2(item): Observable<any> {
    const formdata: FormData = new FormData();
 
    //formdata.append('image1', file);
   // formdata.append('link', link);
    formdata.append('itemCart', new Blob([JSON.stringify(item)], {
      type: "application/json"
  }));

  console.log(formdata.get("itemCart"));  
    const req = new HttpRequest('POST', `${baseUrl+"/test/add"}`, formdata);
    
    return this.http.request(req);
  
  }

  createX(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${baseUrl+"/test/add"}`, data);
    
  }
  createY(data,image :File): Observable<any> {

    console.log("createY");
    console.log(data);

    const formdata: FormData = new FormData();

    formdata.append('itemCart', new Blob([JSON.stringify(data)], {
      type: "application/json"
  }));
    formdata.append('image', image);



    return this.http.post(`${baseUrl+"/test/addY"}`, formdata);
    
  }


  findOne(data:any): Observable<any>{
    return this.http.post(`${baseUrl+"/One"}`, data);

  }
  
  update(item,id): Observable<any> {
    const formdata: FormData = new FormData();
    console.log(item);
    console.log(id);
 
   
    formdata.append('item', new Blob([JSON.stringify(item)], {
      type: "application/json"
  }));
    
    const req = new HttpRequest('PUT', `${baseUrl+"/update"}/${id}`, formdata);
    
    return this.http.request(req);
  
  }

  updateY(itemCart): Observable<any> {
    
    
  const req = new HttpRequest('PUT', `${baseUrl+"/update"}`, itemCart);

    
    return this.http.request(req);
  
  }

  save(id_item,id_user): Observable<any> {
    
    return this.http.post(`${baseUrl+"/save"}/${id_item}/${id_user}`, null);
  }

  delete(id_event,id_user): Observable<any> {
    
    return this.http.delete(`${baseUrl+"/delete"}/${id_event}/${id_user}`);
  }
  delete2(id_event): Observable<any> {
    
    return this.http.delete(`${baseUrl+"/delete"}/${id_event}`);
  }
  updateX(image: File): Observable<any> {

    const formdata: FormData = new FormData();
 
    formdata.append('image1', image);

    const req = new HttpRequest('PUT', `${baseUrl+"/update/addImage"}`, formdata);
    
    return this.http.request(req);
    
  }

}
  