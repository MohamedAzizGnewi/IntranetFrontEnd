import { Component, OnInit } from '@angular/core';
import {UserinfoService} from "../_services/userinfo.service";

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent implements OnInit {
  show=false;
  recruits:any[];
  users:any[];
  constructor(public userinfoService:UserinfoService) { }

  ngOnInit(): void {
    this.getRecruits();
  }
  open(username) {
    console.log(username)
        window.open( 
          username, "_blank");
    }
    
    public width = '300px';
    public height = '300px';
    public width2 = '100%';
    public height2 = '300px';
    getRecruits() {   
      this.userinfoService.getUsersRecruitments().subscribe(
        response => {
        
         console.log(response)
         this.recruits=response;
          this.show=true;
         
        },
        error => {
          console.log(error);
        }
    
      
      );
    }
  

}
