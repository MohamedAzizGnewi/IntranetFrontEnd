import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FileInfo, FileRestrictions } from "@progress/kendo-angular-upload";
import {FormGroup, FormControl} from '@angular/forms';
import * as moment from 'moment';
export interface DialogData {
  id:number;
 
}
@Component({
  selector: 'app-new-actuality',
  templateUrl: './new-actuality.component.html',
  styleUrls: ['./new-actuality.component.css']
})
export class NewActualityComponent implements OnInit {
  public visibility: any[]=["public","luxembourg","france","united kingdom","tunis","singapour","switzerland"];
  checked = true;
   format1 = "YYYY-MM-DD HH:mm:ss"
  content;
  form=1;
  pays;
  items: any[] = [ { name:'Actuality',val:1},{ name:'Flash Info',val:3}];
  files: any[] = [];
  images: FileInfo[];
  uploadSaveUrl = "saveUrl"; // should represent an actual API endpoint
  uploadRemoveUrl = "removeUrl"; // should represent an actual API endpoint
  id; 
  flash = {
    pays:"",
    title: '',
    description: '',
    date: null,
   


  };
  event = {

    pays:"",
    name:"",
    link: '',
    address: '',
    venue: '',
    description:'',
    start_date:'',
    start_time:'',
    end_date:'',
    end_time:''
   


  };
  constructor(public dialogRef: MatDialogRef<NewActualityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
}
save() {  
  console.log(this.form)
  if(this.form==1)
  {
    console.log(this.images);
    let array=[];
    let i=0;
    for (var val of this.images) {
      array.push(val["rawFile"]);
      i++;
    }
    this.files=array;
    const data = {
      type:"actuality",
      visibility:this.pays,
      content:this.content,
      images:this.files
  
   }; 
   this.dialogRef.close(data);
  }
  else if(this.form==2)
  {    
    console.log(this.images);
    if(this.checked)
  {  
   const data = {
    category:"online",
    pays:this.event.pays,
    name:this.event.name,
    link: this.event.link,
    address: this.event.address,
    venue: this.event.venue,
    description:this.event.description,
    start_date:this.event.start_date,
    start_time:this.event.start_time,
    end_date:this.event.end_date,
    end_time:this.event.end_time,
    image:this.images[0]["rawFile"],
 }; 
 this.dialogRef.close(data);}
 else { 
  const data = {
    category:"presence",
    pays:this.event.pays,
    name:this.event.name,
    link: this.event.link,
    address: this.event.address,
    venue: this.event.venue,
    description:this.event.description,
    start_date:this.event.start_date,
    start_time:this.event.start_time,
    end_date:this.event.end_date,
    end_time:this.event.end_time,
    image:this.images[0]["rawFile"],
 }; 
 this.dialogRef.close(data);
 }
  }
  else if(this.form==3)
  {    
    console.log(this.images);
   this.flash.date=moment(this.flash.date).format(this.format1);
   const data = {
    type:"flash",
    visibility:this.flash.pays,
     title:this.flash.title,
    description:this.flash.description,
    image:this.images[0]["rawFile"],
    date_end:this.flash.date

 }; 
 this.dialogRef.close(data);
  }

 /* if(this.checked)
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
   venue:null,
  address:null,
   image: this.image[0]["rawFile"],
 }; 
 this.dialogRef.close(data);
  }


}*/
}
}