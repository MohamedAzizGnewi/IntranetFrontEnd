import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FileInfo, FileRestrictions } from "@progress/kendo-angular-upload";
import {FormGroup, FormControl} from '@angular/forms';
export interface DialogData {
  id:number;
 
}
@Component({
  selector: 'app-new-marketing-event',
  templateUrl: './new-marketing-event.component.html',
  styleUrls: ['./new-marketing-event.component.css']
})
export class NewMarketingEventComponent implements OnInit {
  public types: any[]=[
    {"name":"Webinars"},
    {"name":"Fairs"},
    {"name":"Internal Events"}
  ];
  type; 
  name;
  description;
  link;
  address;
  venue;
  start_time;
  end_time;
  start_date;
  end_date;
  uploadSaveUrl = "saveUrl"; // should represent an actual API endpoint
  uploadRemoveUrl = "removeUrl"; // should represent an actual API endpoint
  id;
  checked = true;
  image;
  campaignOne: FormGroup;
  constructor(public dialogRef: MatDialogRef<NewMarketingEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }


  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
}
save() {  
  if(this.checked)
  {  
  
  const data = {
    
    category:"online",
    type:this.type,
   name: this.name,
   description: this.description,
   link: this.link,
   start_time:this.start_time,
   start_date:this.start_date,
   end_date:this.end_date,
   end_time:this.end_time,
   venue:null,
  address:null,
   image: this.image[0]["rawFile"],
 }; 
 this.dialogRef.close(data);
  }
  else {
    console.log(this.name);
  console.log(this.description);
  const data = {
    
    category:"presence",
    type:this.type,
   name: this.name,
   description: this.description,
   link: this.link,
   start_time:this.start_time,
   start_date:this.start_date,
   end_date:this.end_date,
   end_time:this.end_time,
   venue:this.venue,
  address:this.address,
   image: this.image[0]["rawFile"],
 }; 
 this.dialogRef.close(data);
  }


}

}