import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  id:number;
  
}
@Component({
  selector: 'app-update-tool',
  templateUrl: './update-tool.component.html',
  styleUrls: ['./update-tool.component.css']
})
export class UpdateToolComponent implements OnInit {
  link;
  constructor( public dialogRef: MatDialogRef<UpdateToolComponent>,
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
      
   
 
   const data = {
    link: this.link
    
    
  }; 
  this.dialogRef.close(data);

}
}