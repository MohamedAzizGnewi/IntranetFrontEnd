import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UserinfoService} from "../_services/userinfo.service"
import * as moment from 'moment';
export interface DialogData {
  id:number;

  
}

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
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
   indexedArray: {[key: string]: string}= {
    ROLE_ADMIN: "admin",
    ROLE_MODERATOR:"mod",
    ROLE_RH:"rh",
    ROLE_MARKETING:"marketing",
    ROLE_DEV:"dev",
    ROLE_SALES:"sales",
    ROLE_APSYS:"apsys",
    ROLE_EQUALIZER:""
}
  show=false;
  format1 = "YYYY-MM-DD HH:mm:ss"
  public roles: any[]=["admin","user","rh","marketing","dev","sales","apsys","equalizer","Banker's Front","las","cim","ncm","E-banking","awm","ms","ps","finance"];
  public pays: any[]=["luxembourg","france","united kingdom","tunis","singapour","switzerland"];

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
  role: string[] = [];
  join_date;
  selectedRole;
  poste;
  selectedDepartement;
  email;
  firstname;
  lastname;
  selectedPays;
  constructor( public dialogRef: MatDialogRef<UserEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,public userinfoService:UserinfoService) { }

  ngOnInit(): void {
    console.log(this.data)
    this.userinfoService.getUser3(this.data.id).subscribe(
      response => {
        console.log(new Date(response.join_date));
        this.join_date=new Date(response.join_date)
        this.selectedRole=this.indexedArray[response.roles[0].name];
        this.poste=response.poste
        this.selectedDepartement=response.departement.name
        this.email=response.username
        this.lastname=response.lastName
        this.firstname=response.firstName
        this.selectedPays=response.pays
      this.show=true;
    
           
     
      },
      error => {
        console.log(error);
      }
  
  
    );
   
  }
  close() {
   
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

}}
