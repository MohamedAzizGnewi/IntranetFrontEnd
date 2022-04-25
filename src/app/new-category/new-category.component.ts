import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  id:number;
 
}
@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {
  id;
  name:string="";
  constructor(public dialogRef: MatDialogRef<NewCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    this.id=this.data.id;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
}
save() {  
    
 
  console.log(this.name);

  const data = {
   name: this.name,

   
 }; 
 this.dialogRef.close(data);
 
 }

}
