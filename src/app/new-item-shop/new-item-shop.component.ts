import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileInfo } from '@progress/kendo-angular-upload';
import { hy } from 'date-fns/locale';
import { ShoppingCartService } from '../_services/shoppingCart.service';


export interface DialogData {
  id:number;
 
}
@Component({
  selector: 'app-new-item-shop',
  templateUrl: './new-item-shop.component.html',
  styleUrls: ['./new-item-shop.component.css']
})
export class NewItemShopComponent implements OnInit {

  public Types: any[]=[
    {"name":"forniture"},
    {"name":"IT"},
    {"name":"other"}
  ];
  idOne:any;
  id;
  name:string="";
  description
  category;
  quantity;
  type;
  price;
  visibility;
  image:FileInfo[];
  uploadSaveUrl = "saveUrl"; // should represent an actual API endpoint
  uploadRemoveUrl = "removeUrl"; // should represent an actual API endpoint
  campaignOne: FormGroup;


  constructor(public dialogRef: MatDialogRef<NewItemShopComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
}
save() {  
  
  const data = {
   name: this.name,
   description: this.description,
   type:this.type,
   quantity: this.quantity,
   price: this.price,
   visibility: this.visibility,
  // image: this.image[0]["rawFile"],
 }; 
 console.log(data.name);
 this.dialogRef.close(data);
  
  

}
/*
saveX(): void {
  const data = {
    name: this.name,
   description: this.description,
   type:this.type,
   quantity: this.quantity,
   price: this.price,
   visibility: this.visibility,
  };


  this.shoppingCartService.createY(data)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
      this.dialogRef.close();
} */
saveY(): void {
  const data = {
    name: this.name,
   description: this.description,
   type:this.type,
   quantity: this.quantity,
   price: this.price,
   visibility: this.visibility,
  };
  //const image: this.image[0]["rawFile"];
/*
  this.shoppingCartService.createX(data)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
      this.dialogRef.close();
  this.idOne=this.shoppingCartService.findOne(data);*/
  this.shoppingCartService.createY(data,this.image[0]["rawFile"]).
  subscribe(
    response => {
      console.log(response);
    },
    error => {
      console.log(error);
    });
    this.dialogRef.close();
}






}
