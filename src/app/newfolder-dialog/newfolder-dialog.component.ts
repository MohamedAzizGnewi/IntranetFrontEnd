import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DirectoryService} from "../././_services/directory.service";
import {Directory2Service} from "../././_services/directory2.service";
import {ThemePalette} from '@angular/material/core';
import { interval } from 'rxjs';
import {Directory} from "../_models/directory";
import {Departement} from "../_models/departement";
export interface DialogData {
  selected: string;
  id:number;
  
}
export interface Task {
  name: string;
  completed: boolean;
 
  
}

@Component({
  selector: 'app-newfolder-dialog',
  templateUrl: './newfolder-dialog.component.html',
  styleUrls: ['./newfolder-dialog.component.css']
})
export class NewfolderDialogComponent implements OnInit {
  task: Task = {
    name: 'Public',
    completed: false,
   
    
  };
  show1=false;
  selected;
  title:string="";
  subtasks:Departement[]=[];
  permissions:boolean[]=[];
  permission_requests:any=[];
  allComplete: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<NewfolderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private directoryService: DirectoryService,private directoryService2: Directory2Service) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void { 
   
    this.retrieveDirectory();
    console.log(this.data.selected);
  }
  retrieveDirectory() {
    
    this.directoryService2.getPermissions(this.data.id)
      .subscribe(
        data => {
          for (var index in data) {
              
          var sortedArray: any[] = data.sort((n1,n2) => n1.id - n2.id);
          console.log(sortedArray);
          if(sortedArray[index].permission==0)
            {this.subtasks.push(new Departement(data[index].id,false,data[index].departemnt,0));
              this.permissions.push(false)
            }
           else {
            this.subtasks.push(new Departement(data[index].id,true,data[index].departemnt,1));
            this.permissions.push(true)
           }

          }
          console.log( this.subtasks);
          },
        error => {
          console.log(error);
        });

      

  }
  updateAllComplete() {
    this.allComplete = this.subtasks != null && this.subtasks.every(t => t.permission);
  }

  someComplete(): boolean {
    if (this.subtasks == null) {
      return false;
    }
    return this.subtasks.filter(t => t.permission).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed; 
    if (this.subtasks == null) {
      return;
    }
    this.subtasks.forEach(t => t.permission = completed);
  }
 /* save() {
    if(this.selected=="directory") {
      for (var index in this.subtasks) {
        if(this.subtasks[index].permission==false)
        {this.permission_requests.push({"id":this.subtasks[index].id,"permission":0});}
        else {
          this.permission_requests.push({"id":this.subtasks[index].id,"permission":1});
        }
       
      }
     console.log(this.permission_requests);
     console.log(this.title);
     const data = {
      name_directory: this.title,
      permission_requests: this.permission_requests
    };
    this.directoryService.create(data).subscribe(
      response => {
        console.log(response);
       
      },
      error => {
        console.log(error);
      });
    }
    
  }
  save2() {
    console.log(this.subtasks);
    
  }*/
  save3() {  
    
      for (var index in this.subtasks) {
        if(this.subtasks[index].permission==false)
        {this.permission_requests.push({"id":this.subtasks[index].id,"permission":0});}
        else {
          this.permission_requests.push({"id":this.subtasks[index].id,"permission":1});
        }
       
      }
     console.log(this.permission_requests);
     console.log(this.title);
     const data = {
      name_directory: this.title,
      permission_requests: this.permission_requests,
      object:this.data.selected
    };   
    this.dialogRef.close(data);
   
}

close() {
    this.dialogRef.close();
}

}
