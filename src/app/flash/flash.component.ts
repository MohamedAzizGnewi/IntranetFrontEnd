import { Component, OnInit,ViewChild, Input,ViewEncapsulation  } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {FlashService} from "../_services/flash.service";
import {ProfileService} from "../_services/profile.service";
import {UserinfoService} from "../_services/userinfo.service";
@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css']
})
export class FlashComponent implements OnInit {
  @Input() change; 
  @Input() flashs_info; 
  flashs :any[]=[];
  show:boolean=false;
  pays;

  constructor(public profileService:ProfileService,public flashService:FlashService,public userinfoService:UserinfoService) { 

    
   
  
  
    
  }
  getProfile() {
    this.profileService.getProfile().subscribe(
        response => {
          console.log(response);
     
          this.userinfoService.getUser(response.mail).subscribe((data) => {
            console.log(data);
             this.pays=data.pays;
           
           
             this.getflash();
           
            // window.sessionStorage.setItem("user",data);
            //window.sessionStorage.setItem("id",data.id);
            
           
          });
         
        },
        error => {
          console.log(error);
        }
    
      
      );
  }
  ngOnInit(): void {
   this.getProfile();
   }
    ngOnChanges() {
      console.log("change")
   this.flashs=this.flashs_info;
        
    
       
  
     
      
    }
  getflash() {
 
    this.show=false;
    this.flashService.getAll2(this.pays).subscribe(
      response => {
      if(response) {
        this.flashs=response;
      }

        this.show=true;
     

         
    
       
      },  
      error => {
        console.log(error);
      }
  
    
    );
   }
}
