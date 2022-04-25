import { Component, OnInit ,ViewChild} from '@angular/core';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';
import { images } from './images';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UserDialogComponent} from "../../user-dialog/user-dialog.component";
import {AuthService} from "../../_services/auth.service";
import {UserinfoService} from "../../_services/userinfo.service"
import {UserEditComponent}from "../../user-edit/user-edit.component";
import {ProfileService} from "../../_services/profile.service";
import * as os from 'os';
export interface DialogData {
  id:number;

  
}

import {ChildProcessService} from 'ngx-childprocess';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
  show=false;
  isadmin=false;
  public gridData: any[] = [];
  public gridView: any[];
   users: any[]=[];

  public mySelection: string[] = [];

  public ngOnInit(): void {
    this.getProfile();
      this.gridView = this.gridData;
  }
  getProfile() {
    this.profileService.getProfile().subscribe(
        response => {
          console.log(response);
         
          this.userinfoService.getUser2(response.mail).subscribe((data) => {
            console.log(data);
            this.isadmin=true;
            
            this.getUsers();
           
           
            
           
          });
         
        },
        error => {
          console.log(error);
        }
    
      
      );
  }
  getUsers() {
    let array=[];
    this.gridData=[];
    this.show=false;
    this.userinfoService.getUsers().subscribe(
      response => {
        console.log(response);
     
      
        for (var val of response) {
    
          array.push({"id":val.id,"firstname":val.firstName,"lastname":val.lastName,"join_date":val.join_date,"role":val.roles[0].name,"full_name":val.firstName +" " +val.lastName ,"job_title":val.poste,"country":val.pays,"image":val.image});
    
          
  
        
        }
        console.log(array)
        this.gridView=array
       this.gridView = array;
       if(this.gridView!=[])
       { this.show=true;}
    
           
     
      },
      error => {
        console.log(error);
      }
  
  
    );
  }
  edit(dataItem){
    const dialogRef = this.dialog.open(UserEditComponent, {
      data: {
        id:dataItem.id,
     
      },
      width:"40%"
   
    });
    dialogRef.afterClosed().subscribe(
      
      val => {
    
        const data = {
     
            firstName: val.firstname,
            lastName:val.lastname,
            username: val.email,
            role:val.role,
            join_date:val.join_date,
            poste:val.poste,
            pays:val.pays,
         
            
      
        };
        console.log(data);
        this.authService.update(data,val.departement,dataItem.id).subscribe(
            response => {
              console.log(response);
             this.getUsers();
        
           
         
           
             
            },
            error => {
              console.log(error);
            }
        
        
          );

 

  }    
  );
    
  }
  public onFilter(inputValue: string): void {
      this.gridView = process(this.gridData, {
          filter: {
              logic: "or",
              filters: [
                  {
                      field: 'full_name',
                      operator: 'contains',
                      value: inputValue
                  },
                  {
                      field: 'job_title',
                      operator: 'contains',
                      value: inputValue
                  },
                  {
                      field: 'budget',
                      operator: 'contains',
                      value: inputValue
                  },
                  {
                      field: 'phone',
                      operator: 'contains',
                      value: inputValue
                  },
                  {
                      field: 'address',
                      operator: 'contains',
                      value: inputValue
                  }
              ],
          }
      }).data;

      this.dataBinding.skip = 0;
  }
  constructor(public dialog: MatDialog,private _childProcessService: ChildProcessService,public authService:AuthService,public userinfoService:UserinfoService ,public profileService:ProfileService) { }
   photoURL(dataItem: any): string {
      const code: string = dataItem.img_id + dataItem.gender;
      const image: any = images;

      return image[code];
  }
  openDialogNewUser(): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      data: {id:1},
      width: '30%',
     
    });
    dialogRef.afterClosed().subscribe(
      
      val => {
    
        const data = {
     
            firstName: val.firstname,
            lastName:val.lastname,
            username: val.email,
            role:val.role,
            join_date:val.join_date,
            poste:val.poste,
            pays:val.pays,
         
            
      
        };
        console.log(data);
        this.authService.create(data,val.departement).subscribe(
            response => {
              console.log(response);
             this.getUsers();
        
           
         
           
             
            },
            error => {
              console.log(error);
            }
        
        
          );

 

  }    
  );

}
click() {
  
  
  //this._childProcessService.childProcess.spawn('cmd.exe', ['/c', PATH_TO_EXE], { detached: true })
  
        /*    this._childProcessService.childProcess.exec("Downloads/a.exe", 
    options,
        function(err, data) {  
            console.log(err)
            console.log(data.toString());                       
        });*/
  



}

   flagURL(dataItem: any): string {
      const code: string = dataItem.country;
      const image: any = images;

      return image[code];
  }
}
