import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  id:number;
  name:string;
  description:string;
  price:string;
  quantity:string;
  
}

@Component({
  selector: 'app-update-items',
  templateUrl: './update-items.component.html',
  styleUrls: ['./update-items.component.css']
})
export class UpdateItemsComponent implements OnInit {
  id;
  name;
  description;
  price;
  quantity;
 
  constructor( public dialogRef: MatDialogRef<UpdateItemsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {    
    console.log(this.data)
    this.name=this.data.name;
    this.description=this.data.description;
    this.price=this.data.price;
    this.quantity=this.data.quantity;

   

  }
  close() {
    this.dialogRef.close();
}
save() {
  const data = {
   name: this.name,
   description: this.description,
   price:this.data.price,
   quantity:this.data.quantity
   

 }; 
 this.dialogRef.close(data);
}

}
