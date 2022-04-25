import { Component, OnInit ,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-dialog-permission2',
  templateUrl: './dialog-permission2.component.html',
  styleUrls: ['./dialog-permission2.component.css']
})

export class DialogPermission2Component implements OnInit {
  ngOnInit( ) {
    
  }
  constructor(
    public dialogRef: MatDialogRef<DialogPermission2Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

