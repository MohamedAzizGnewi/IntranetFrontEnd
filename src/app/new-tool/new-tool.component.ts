
import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ToolService} from "../_services/tool.service";
import {SolutionService} from "../_services/solution.service";
import { FileInfo, FileRestrictions } from "@progress/kendo-angular-upload";
export interface DialogData {
  id:number;
 
}
@Component({
  selector: 'app-new-tool',
  templateUrl: './new-tool.component.html',
  styleUrls: ['./new-tool.component.css']
})

export class NewToolComponent implements OnInit {
  public tools: any[]=[];
  public solutions: any[]=[];
  selectedValue;
  selectedSolution;
  selectedTool;
  name:string="";
  description:string="";
  link:string="";
  link2:string="";
  logo: FileInfo[];
  uploadSaveUrl = "saveUrl"; // should represent an actual API endpoint
  uploadRemoveUrl = "removeUrl"; // should represent an actual API endpoint
  id;
  getTools(item) {
    this.toolService.getAll2(item)
    .subscribe(
      data => {
        
        console.log(data);
        this.tools=data;

        },
      error => {
        console.log(error);
      });
  }
  getSolutions() {
    this.solutionService.getAll(this.data.id)
      .subscribe(
        data => {
           this.solutions=data;
         
          },
        error => {
          console.log(error);
        });
    }
  form=1;
  items: any[] = [ { name:'New Tool',val:1},{ name:'Existing Tool',val:2}]; 
  constructor(public dialogRef: MatDialogRef<NewToolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private toolService:ToolService,private solutionService:SolutionService) { }

  ngOnInit(): void {
    this.id=this.data.id;
    console.log(this.data.id)
    this.getSolutions();
    this.getTools(this.data.id);
  }
  close() {
    this.dialogRef.close();
}

save() {  
    
   if(this.form==1)
  {  if(this.id==1) {
    console.log(this.name);
  console.log(this.description);
  const data = {
    methode:1,
    solution:this.selectedValue,
   name: this.name,
   description: this.description,
   link: this.link,
   file: this.logo[0]["rawFile"],
 }; 
 this.dialogRef.close(data);
  }
  else {
    console.log(this.name);
  console.log(this.description);
  const data = {
    methode:1,
    solution:null,
   name: this.name,
   description: this.description,
   link: this.link,
   file: this.logo[0]["rawFile"],
 }; 
 this.dialogRef.close(data);
  }
    }
 else if(this.form==2)
 {
 const data = {
  methode:2,
   solution:this.selectedSolution,
  tool: this.selectedTool,
  link: this.link2,

}; 
this.dialogRef.close(data);}
 
 }}
