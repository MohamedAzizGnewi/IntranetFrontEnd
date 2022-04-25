import { Component, OnInit } from '@angular/core';
import {SharedService} from "../_services/shared.service";
import {NewfolderDialogComponent} from "../newfolder-dialog/newfolder-dialog.component"
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DirectoryService} from "../././_services/directory.service";
import {SubdirectoryService} from "../././_services/subdirectory.service";

export interface DialogData {
  selected: string;
  id:number;
  
}
@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})

export class MaterialsComponent implements OnInit {
  activeState;
  selectedFolder;
  id;
  i;
  type;
  activeState2;
  directorys:any=[];
  selected="directory";
  constructor(public sharedsevice: SharedService,public dialog: MatDialog ,private directoryService: DirectoryService,private subdirectoryService: SubdirectoryService) {
    
   }
   Select(): void {
   this.activeState="racine";
    this.selected="directory";

  }
  onSelect(id,i): void {
    this.selected="subdirectory";
    this.id=id;
    this.activeState=i;
   this.type="directory";
  console.log(this.directorys[0].subdirectorys[0].name)
  }
  onSelect2(id,i) {
  this.activeState2=id;
  this.i=i;
  this.type="sub";
  }
  getDirectorys() {
  this.directoryService.getDirectorys()
    .subscribe(
      data => {
        this.directorys=data;
        console.log(data);
        },
      error => {
        console.log(error);
      });
  }
  ngOnInit(): void {
    this.getDirectorys();
  }
  openDialogNewFolder(): void {
    const dialogRef = this.dialog.open(NewfolderDialogComponent, {
      data: {selected: this.selected,id:this.id}
    });
    dialogRef.afterClosed().subscribe(
      
      val => {
        console.log(val)
      if(val.object==="directory") {
          const data = {
            name_directory: val.name_directory,
            permission_requests: val.permission_requests,
           
          };
          this.directoryService.create(data).subscribe(
            response => {
              console.log(response);
              this.getDirectorys();
            },
            error => {
              console.log(error);
            }
  
  
          );
        }

    else if(val.object==="subdirectory")
  {console.log("sgzfdxhgggggggggsdgc")
   const data = {
    name_directory: val.name_directory,
    permission_requests: val.permission_requests,
   
  };
    
    this.subdirectoryService.createRepository(this.id,data).subscribe(
    response => {
      console.log(response);
       this.getDirectorys();
    },
    error => {
      console.log(error);
    }


  );
    
    
    
    


    
  }





      }
    
  );

}
}