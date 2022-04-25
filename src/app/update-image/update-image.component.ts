
import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FileInfo, FileRestrictions } from "@progress/kendo-angular-upload";
import * as moment from 'moment';
import {UserinfoService} from "../_services/userinfo.service"
export interface DialogData {
  id:number;
 
}
@Component({
  selector: 'app-update-image',
  templateUrl: './update-image.component.html',
  styleUrls: ['./update-image.component.css']
})
export class UpdateImageComponent implements OnInit {
  format1 = "YYYY-MM-DD HH:mm:ss"
  uploadSaveUrl = "saveUrl"; // should represent an actual API endpoint
  uploadRemoveUrl = "removeUrl";
  image: FileInfo[];
  phone;
  birthday;
show=false;
  constructor(public dialogRef: MatDialogRef<UpdateImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,public userinfoService:UserinfoService) { }


    ngOnInit(): void {
    
    }
    save() {
      const data = {

        file: this.image[0]["rawFile"],
     }; 
     this.dialogRef.close(data);
    }
    close() {
      this.dialogRef.close();
  }

}
