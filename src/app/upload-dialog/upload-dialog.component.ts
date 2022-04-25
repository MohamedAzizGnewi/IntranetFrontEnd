import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FileInfo, FileRestrictions } from "@progress/kendo-angular-upload";
import {Directory2Service} from "../././_services/directory2.service";
import {Departement} from "../_models/departement";
export interface DialogData {
  selected: string;
  id:number;  
  
}
@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.css']
})
export class UploadDialogComponent implements OnInit {
  permissions:boolean[]=[];
  uploadSaveUrl = "saveUrl"; // should represent an actual API endpoint
  uploadRemoveUrl = "removeUrl"; // should represent an actual API endpoint
  form: FileInfo[];
  currentFile: File;
  selectedFiles: FileList;
  info:Departement[]=[];
  permission_requests:any=[];
  subtasks:Departement[]=[];
  allComplete: boolean = false;
  valeur;
  constructor(
    public dialogRef: MatDialogRef<UploadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private directoryService2: Directory2Service
    ) {}

  ngOnInit(): void {
    this.retrieveDirectory();
  }
  close() {
    this.dialogRef.close();
}
selectFile(event) {
  this.selectedFiles = event.target.files;
  this.currentFile = this.selectedFiles.item(0);
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
retrieveDirectory() {
    
  this.directoryService2.getPermissions(this.data.id)
    .subscribe(
      data => {
        for (var index in data) {
          var sortedArray: any[] = data.sort((n1,n2) => n1.id - n2.id);
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

onSubmit() {
  for (var index in this.subtasks) {
    if(this.subtasks[index].permission==false)
    {this.permission_requests.push({"id":this.subtasks[index].id,"permission":0});}
    else {
      this.permission_requests.push({"id":this.subtasks[index].id,"permission":1});
    }
   
  }




  const data = {
    
    file: this.form[0]["rawFile"],
    permission_requests: this.permission_requests,
  }; 
  console.log(this.form[0]["rawFile"]);

  this.dialogRef.close(data);
 
}
}
