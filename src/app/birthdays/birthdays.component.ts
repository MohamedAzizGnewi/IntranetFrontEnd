import { Component, OnInit } from '@angular/core';
import {UserinfoService} from "../_services/userinfo.service";
@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.css']
})
export class BirthdaysComponent implements OnInit {
   show=false;
   users:any[];
   mail="hela.kastalli@newaccess.ch"
  constructor(public userinfoService:UserinfoService) { }

  ngOnInit(): void {
    this.getusers();
  }
  open(username) {
  console.log(username)
      window.open( 
        "MSTeams:/l/chat/0/0?users="+username+"&message=happy birthday", "_blank");
  }
  getusers() {   
    this.userinfoService.getUsesbirthday().subscribe(
      response => {
      
       console.log(response)
       this.users=response;
        this.show=true;
       
      },
      error => {
        console.log(error);
      }
  
    
    );
  }

}
