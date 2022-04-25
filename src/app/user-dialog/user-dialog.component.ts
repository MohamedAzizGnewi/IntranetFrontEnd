import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ProfileService} from "../_services/profile.service";
import * as moment from 'moment';

export interface DialogData {
  id:number;
  
}
@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {
  format1 = "YYYY-MM-DD HH:mm:ss"
  public roles: any[]=["admin","user","rh","marketing","dev","sales","apsys","equalizer","Banker's Front","las","cim","ncm","E-banking","awm","ms","ps","finance"];
  public pays: any[]=["luxembourg","france","united kingdom","tunis","singapour","switzerland"];
  indexedArray2: {[key: string]: number}= {
    "Dev": 1,
    "Marketing":2,
    "Finance":3,
    "HR":4,
    "Sales":5,
    "Professional services":6,
    "Ex.Co":7,
    "Managed Services":8,
    "IT":9
}
  public departements: any[]=[
  {"id":1,"name":"Dev"},
  {"id":2,"name":"Marketing"},
  {"id":3,"name":"Finance"},
  {"id":4,"name":"HR"},
  {"id":5,"name":"Sales"},
  {"id":6,"name":"Professional services"},
  {"id":7,"name":"Ex.Co"},
  {"id":8,"name":"Managed Services"},
  {"id":9,"name":"IT"},

  ];
  join_date;
  selectedRole;
  poste;
  selectedDepartement;
  email;
  firstname;
  lastname;
  selectedPays;
  role: string[] = [];
  constructor( public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,public profileService:ProfileService) { }
    onNoClick(): void {
      this.dialogRef.close();
    }
  
    close() {
      this.dialogRef.close();
  }
  
  ngOnInit(): void {

   
  }
  save() {  
    this.role.push(this.selectedRole)
    console.log(this.indexedArray2[this.selectedDepartement])
    const data = {
      
     
      firstname: this.firstname,
      lastname: this.lastname,
      email:this.email,
      departement:this.indexedArray2[this.selectedDepartement],
      role:this.role,
      poste:this.poste,
      pays:this.selectedPays,
      join_date:moment(this.join_date).format(this.format1)
   
    }; 
    this.dialogRef.close(data);

   

   }
}
