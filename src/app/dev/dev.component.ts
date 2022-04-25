import { Component, OnInit } from '@angular/core';
import {Directory2Service} from "../././_services/directory2.service";
import {DevDetailComponent} from "../dev-detail/dev-detail.component";
import {NewSolutionComponent} from "../new-solution/new-solution.component";
import {NewToolComponent} from "../new-tool/new-tool.component";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SolutionService} from "../_services/solution.service";
import {ToolService} from "../_services/tool.service";
import {UpdateToolComponent} from "../update-tool/update-tool.component";
import {UserinfoService} from "../_services/userinfo.service";
import {TokenStorageService} from "../_services/token-storage.service";
import {ProfileService} from "../_services/profile.service";
const is = (fileName: string, ext: string) => new RegExp(`.${ext}\$`).test(fileName);
@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})  

export class DevComponent implements OnInit {
  solutions=["ROLE_APSYS", "ROLE_EQUALIZER","ROLE_BankerF","ROLE_LAS","ROLE_CIM","ROLE_NCM","ROLE_EBANKING","ROLE_AWM"];

  id=1;
  isadmin:boolean=false;
  isadmin2:boolean=false;
  id_departement=1;
  id_user;  
  permissions;
  show:boolean=true;
  change=false;
  public data1: any[] ;
  public directorys: any[] ;
  public tools: any[] ;
  currentItem=1;
  currentName;
  user2:any;
    public data: any[] = [{
        id: 1,
        name: 'My Documents',
        directorys: [
        {
            id: 1,
            name: "direc1",
            lastUpdate: "2021-06-02 17:01:21",
            size: 0,
            files: [],
            directorys: [],
            permissions: []
        },
      
        {
            id: 4,
            name: "TEST",
            lastUpdate: "2021-06-01 16:46:39",
            size: 0,
            files: [],
            directorys: [],
            permissions: []
        }]
    }];
   
  constructor(public profileService:ProfileService,public tokenStorageService :TokenStorageService,public userinfoService:UserinfoService,private directoryService: Directory2Service,public dialog: MatDialog,private solutionService:SolutionService,private toolService :ToolService) { }
  getDirectorys(id,item) {
    console.log(this.isadmin2)
    this.directoryService.getAll4(id,item)
      .subscribe(
        data => {
          let permission=this.permissions - 1
          if(!this.isadmin2) {
            for (var val of data ) {
              let array=[];
              for (var val2 of val.directorys ) {
                var sortedArray: any[] = val2.permissions.sort((n1,n2) => n1.id - n2.id);
         
                
               if(sortedArray[permission].permission==1)
               {  
                 array.push(val2)
               }
               val["directoryss"]=array;
  
              } 
  
            }
            console.log(data);
             this.directorys=data;

          }
          else {
            for (var val of data ) {
              let array=[];
              for (var val2 of val.directorys ) {
           
             
                 array.push(val2)
         
               val["directoryss"]=array;
  
            
  
            }  
             this.directorys=data;
          }
      
          console.log(data);
          
          }},
        error => {
          console.log(error);
        });
     
       
    }
    getTools(item) {
      this.toolService.getAll(item)
      .subscribe(
        data => {
          this.tools=data;
       
          },
        error => {
          console.log(error);
        });
    }
    getSolutions() {
      this.solutionService.getAll(this.id)
        .subscribe(
          data => {
             this.data1=data;
             this.show=true;
            },
          error => {
            console.log(error);
          });
      }
      getProfile() {
        this.show=false;
        this.profileService.getProfile().subscribe(
            response => {
              console.log(response);
             
              this.userinfoService.getUser2(response.mail).subscribe((data) => {
                console.log(data);
             
  
              
                if(this.solutions.find(item => item === data.roles[0].name)!=undefined )
                {
                  this.isadmin=true;
                }
                this.getSolutions();
                this.permissions=data.departement.id;
                this.user2=data;
                this.id_user=data.id;
               
               
               
                
               
              });
             
            },
            error => {
              console.log(error);
            }
        
          
          );
      }
  ngOnInit(): void {
     this.getProfile();
   
   
 
       
  }
  getuserinfo(id) {
    this.userinfoService.getAll(id).subscribe(
      response => {
        console.log(response);
        this.user2=response;
    
       
      },
      error => {
        console.log(error);
      }
  
    
    );
   }

   iconClass({ text, items }: any): any {
    return {
        'k-i-file-pdf': is(text, 'pdf'),
        'k-i-folder': items !== undefined,
        'k-i-html': is(text, 'html'),
        'k-i-image': is(text, 'jpg|png'),
        'k-icon': true
    };
}
select(item,index,name) {
  for (let i = 0; i < this.data1.length; i++) {
    this.data1[i].class="item3 item";
    this.data1[i].class2=""
  }
  
  
  this.data1[index].class="item1";
  this.data1[index].class2="shadow";
  
  console.log("hi");

  this.currentItem=item;
    console.log(name);
    if(name=="Apsys") {
      if(this.user2.roles[0].name=="ROLE_MARKETING")
      {
        this.isadmin2=true;
      }
      else {
        this.isadmin2=false;
      }
    }
    else if(name=="Equalizer") {
      if(this.user2.roles[0].name=="ROLE_MARKETING")
      {
        this.isadmin2=true;
      }
      else {
        this.isadmin2=false;
      }
      
    }
    else if(name=="Banker's Front") {
      if(this.user2.roles[0].name=="ROLE_MARKETING")
      {
        this.isadmin2=true;
      }
      else {
        this.isadmin2=false;
      }
      
    }
    else if(name=="LAS") {
      if(this.user2.roles[0].name=="ROLE_MARKETING")
      {
        this.isadmin2=true;
      }
      else {
        this.isadmin2=false;
      }
      
    }
    else if(name=="CIM") {
      if(this.user2.roles[0].name=="ROLE_MARKETING")
      {
        this.isadmin2=true;
      }
      else {
        this.isadmin2=false;
      }
      
    }
    else if(name=="NCM") {
      if(this.user2.roles[0].name=="ROLE_MARKETING")
      {
        this.isadmin2=true;
      }
      else {
        this.isadmin2=false;
      }
      
    }
    else if(name=="E-banking") {
      if(this.user2.roles[0].name=="ROLE_MARKETING")
      {
        this.isadmin2=true;
      }
      else {
        this.isadmin2=false;
      }
      
    }
    else if(name=="AWM") {
      if(this.user2.roles[0].name=="ROLE_MARKETING")
      {
        this.isadmin2=true;
      }
      else {
        this.isadmin2=false;
      }
      
    }

    
   this.getDirectorys(this.id_departement,item);
   this.getTools(item);
  console.log(this.currentItem);

}
  openNewPage(link) {
    window.open( 
      link, "_blank");
     
  

}
openDialognewSolution():void {
  const dialogRef = this.dialog.open(NewSolutionComponent, {
    data: {id:this.id},
    width: '25%',
   
  });
  dialogRef.afterClosed().subscribe(
      
    val => {
      console.log(val)
  


 const data = {
  name: val.name,
  description: val.description,
 
};
  
  this.solutionService.create(data,this.id).subscribe(
  response => {
    console.log(response);
    this.getSolutions();
    this.change=!this.change;
   
  },
  error => {
    console.log(error);
  }


);  
}    
);

}
openDialognewTool():void {
  const dialogRef = this.dialog.open(NewToolComponent, {
    data: {id:this.id},
    width: '25%',
  });
  dialogRef.afterClosed().subscribe(
      
    val => {
      console.log(val)
  
      if(val.methode===1) {
        const data = {
          name: val.name,
          description: val.description,
         
        };
          
          this.toolService.create(val.file,data,val.link,val.solution,this.id).subscribe(
          response => {
            console.log(response);
           this.change=!this.change;
           
          },
          error => {
            console.log(error);
          }
        
        
        ); 
      }
      else if(val.methode===2) {
        console.log(val);
        this.toolService.create2(val.link,val.tool,val.solution,this.id).subscribe(
          response => {
            console.log(response);
           this.change=!this.change;
           
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

