import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../_services/profile.service"
import {UserinfoService} from "../_services/userinfo.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UserUpdate2Component} from "../user-update2/user-update2.component";
import {UpdateImageComponent} from "../update-image/update-image.component";
import {AuthService} from "../_services/auth.service";
@Component({
  selector: 'app-profile2',
  templateUrl: './profile2.component.html',
  styleUrls: ['./profile2.component.css']
})
export class Profile2Component implements OnInit {
  user;
  id;
  show=false;
  public src =
  "../../assets/images/may.jpg";
  constructor(public authService:AuthService,public profileService:ProfileService,public userinfoService:UserinfoService,public dialog: MatDialog,) { }
  update_image() {
    const dialogRef = this.dialog.open(UpdateImageComponent, {
      data: {id:this.id},
      width: '30%',
     
    });
    dialogRef.afterClosed().subscribe(
      
      val => {
        if(val!=undefined) {
      
      
          console.log(val);
     
          this.authService.update3(val.file,this.id).subscribe(
            response => {
              console.log(response);
           
        
           this.getProfile();
         
           
             
            },
            error => {
              console.log(error);
            }
        
        
          );
        }
    
 

  }


  );
  }
  update(): void {
    const dialogRef = this.dialog.open(UserUpdate2Component, {
      data: {id:this.id},
      width: '30%',
     
    });
    dialogRef.afterClosed().subscribe(
      
      val => {
        if(val!=undefined) {
          const data = {
     
            phone_number: val.phone,
            birthday:val.birthday,
    
         
            
      
        };
      
          console.log(val);
     
          this.authService.update2(data,this.id).subscribe(
            response => {
              console.log(response);
           
        
           this.getProfile();
         
           
             
            },
            error => {
              console.log(error);
            }
        
        
          );
        }
    
 

  }


  );

}
  getProfile() {
    this.show=false;
    this.profileService.getProfile().subscribe(
      response => {
    

        this.userinfoService.getUserinfo(response.mail).subscribe((data) => {
          console.log(data);
          this.user=data;
          this.id=data.id;
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

  ngOnInit(): void {
    this.getProfile();
  }

}
 