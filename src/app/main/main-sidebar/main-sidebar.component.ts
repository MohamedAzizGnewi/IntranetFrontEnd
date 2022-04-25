import { Component, OnInit } from '@angular/core';
import {UserinfoService} from "../../_services/userinfo.service";
import {ProfileService} from "../../_services/profile.service"
@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css']
})
export class MainSidebarComponent implements OnInit {
  cheminImage:any = "../../../assets/images/logo.png";
  user;
  show=false;
  constructor(public userinfoService:UserinfoService,public profileService:ProfileService) { }
  panelOpenState = false;
  customCollapsedHeight: string = '39px';
  ngOnInit(): void {
    this.getProfile();
  }
  getProfile() {

    this.profileService.getProfile().subscribe(
      response => {
    

        this.userinfoService.getUserinfo(response.mail).subscribe((data) => {
          console.log(data);
          this.user=data;
          this.show=true;
         
          // window.sessionStorage.setItem("user",data);
          //window.sessionStorage.setItem("id",data.id);
          
         
        });
       
      },
      error => {
        console.log(error);
      }
  
    
    );
  }
} 
