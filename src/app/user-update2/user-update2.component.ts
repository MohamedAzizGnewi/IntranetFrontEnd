
import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FileInfo, FileRestrictions } from "@progress/kendo-angular-upload";
import * as moment from 'moment';
import {UserinfoService} from "../_services/userinfo.service"
export interface DialogData {
  id:number;
 
}
@Component({
  selector: 'app-user-update2',
  templateUrl: './user-update2.component.html',
  styleUrls: ['./user-update2.component.css']
})

export class UserUpdate2Component implements OnInit {
  format1 = "YYYY-MM-DD HH:mm:ss"
  uploadSaveUrl = "saveUrl"; // should represent an actual API endpoint
  uploadRemoveUrl = "removeUrl";
  image: FileInfo[];
  phone;
  birthday;
show=false;
  constructor(public dialogRef: MatDialogRef<UserUpdate2Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,public userinfoService:UserinfoService) { }

  ngOnInit(): void {
    this.userinfoService.getAll(this.data.id).subscribe(
      response => {
        console.log(response);
     this.phone=response.phone_number;
   
     this.birthday= new Date(response.birthday)
      this.show=true;
    
           
     
      },
      error => {
        console.log(error);
      }
  
  
    );
  }
  save() {
    const data = {
      phone:this.phone,
      birthday:moment(this.birthday).format(this.format1)
      /*file: this.image[0]["rawFile"],*/
   }; 
   this.dialogRef.close(data);
  }
  close() {
    this.dialogRef.close();
}

}
