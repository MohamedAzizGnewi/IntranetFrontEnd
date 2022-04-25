import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  id:number;
  name:string;
  link:string;
  address:string;
  venu:string;
  description:string;
  start_date:string;

  end_date:string;
  
}
@Component({
  selector: 'app-update-presence',
  templateUrl: './update-presence.component.html',
  styleUrls: ['./update-presence.component.css']
})
export class UpdatePresenceComponent implements OnInit {
  name;
  address;
  venue;
  description;
  start_date;
  start_time;
  end_date;
  end_time
  constructor( public dialogRef: MatDialogRef<UpdatePresenceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
    ngOnInit(): void {    
      console.log(this.data)
      this.name=this.data.name;
      this.venue=this.data.venu;
      this.address=this.data.address;
      this.description=this.data.description;
      this.start_date = this.data.start_date.slice(0, 10); 
      this.start_time = this.data.start_date.slice(11, 16); 
      this.end_date = this.data.end_date.slice(0, 10); 
      this.end_time = this.data.end_date.slice(11, 16); 
  
    }
    close() {
      this.dialogRef.close();
  }
  save() {
    const data = {
      
     
     name: this.name,
     description: this.description,
     link: null,
     start_time:this.start_time,
     start_date:this.start_date,
     end_date:this.end_date,
     end_time:this.end_time,
     venue:this.venue,
    address:this.address,
  
   }; 
   this.dialogRef.close(data);
  }

}  
