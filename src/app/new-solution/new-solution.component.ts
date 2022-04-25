import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  id:number;
  
}
@Component({
  selector: 'app-new-solution',
  templateUrl: './new-solution.component.html',
  styleUrls: ['./new-solution.component.css']
})

export class NewSolutionComponent implements OnInit {
  name:string="";
  description:string="";
  constructor( public dialogRef: MatDialogRef<NewSolutionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
}
save() {  
    
 
 console.log(this.name);
 console.log(this.description);
 const data = {
  name: this.name,
  description: this.description,
   
}; 
this.dialogRef.close(data);

}

}
