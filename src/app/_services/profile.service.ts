import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenStorageService} from "././token-storage.service"
import {UserinfoService} from "././userinfo.service"
const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';
const GRAPH_ENDPOINT_PHOTO = 'https://graph.microsoft.com/v1.0/me/photo/$value';
const GRAPH_ENDPOINT_MAIL = 'https://graph.microsoft.com/v1.0/me/sendMail';
const GRAPH_ENDPOINT_USER = 'https://graph.microsoft.com/v1.0/users/';

//const GRAPH_ENDPOINT_PHOTO = 'https://graph.microsoft.com/v1.0/users/ff5d7e53-87a0-40e7-a56e-c9e501e2072d/photo/';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private userinfoService:UserinfoService,
    private http: HttpClient,private tokenStorageService:TokenStorageService) { }
    getProfile(): Observable<any> {
      return this.http.get(GRAPH_ENDPOINT);
    }
    getUser(mail) :Observable<any> {
      return this.http.get(`${GRAPH_ENDPOINT_USER }/${mail}`);
    }
    getUser2(mail) :Observable<any> {
      return this.http.get(`${GRAPH_ENDPOINT_USER }/${mail}?$select=displayName,givenName,jobTitle`);
    }
    getPhoto(): Observable<any> {
      return this.http
          .get(GRAPH_ENDPOINT_PHOTO, {responseType: 'blob'})
          
  }
  getimage() {
   this.getPhoto().subscribe((response) => {
      var reader = new FileReader();
    reader.readAsDataURL(response);
    reader.onloadend = function () {
    var base64String: string = reader.result as string;;
   
    
    
    console.log('Base64 String without Tags- ',base64String )
    
 
    window.sessionStorage.setItem("image-user",base64String);}
   
     
    });
  }
  getInformations() {
    this.http.get<any>(GRAPH_ENDPOINT).subscribe((profile) => {
     
   
      this.userinfoService.getUser(profile.mail).subscribe((data) => {
        console.log(data);
        window.sessionStorage.setItem("user",data);
        
       
      });
    });
  }
  getInformation() {
    this.http.get<any>(GRAPH_ENDPOINT).subscribe((profile) => {
     
   
      this.userinfoService.getUser(profile.mail).subscribe((data) => {
        console.log(data);
        this.tokenStorageService.saveUser(data);
        
       
      });
    });
  }
    
}
