import { Component, OnInit } from '@angular/core';
import {MarketingDetailComponent} from "../marketing-detail/marketing-detail.component";
import {NewToolComponent} from "../new-tool/new-tool.component";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SolutionService} from "../_services/solution.service";
import {ToolService} from "../_services/tool.service";
import {UpdateToolComponent} from "../update-tool/update-tool.component";
import {Directory2Service} from "../././_services/directory2.service";
import {NewCategoryComponent} from "../new-category/new-category.component"
import {UserinfoService} from "../_services/userinfo.service";
import {TokenStorageService} from "../_services/token-storage.service";
import {ProfileService} from "../_services/profile.service";
const is = (fileName: string, ext: string) => new RegExp(`.${ext}\$`).test(fileName);
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  isadmin:boolean;
  show:boolean=true;
  getProfile2() {
    this.profileService.getInformations();
  }
  getProfile() {
    this.show=false;
    this.profileService.getProfile().subscribe(
        response => {
          console.log(response);
         
          this.userinfoService.getUser(response.mail).subscribe((data) => {
            console.log(data);
            this.user2=data;
            this.id_user=data.id;
            if(data.roles[0].name=='ROLE_MARKETING')
           {
            this.isadmin=true;
           }
           else {
             this.isadmin=false;
           }
           this.show=true;
           
           //this.getDirectorys();
            
           
          });
         
        },
        error => {
          console.log(error);
        }
    
      
      );
  }
  id=5;
  id_user;
  change=false;
  public data1: any[];
  currentItem=1;
  currentName;
  public data: any[] ;
  user2:any;

  constructor(public userinfoService:UserinfoService,public profileService:ProfileService,public tokenStorageService :TokenStorageService,private directoryService: Directory2Service,public dialog: MatDialog,private solutionService:SolutionService,private toolService :ToolService) { }
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
    

  getDirectorys() {
    this.directoryService.getAll()
      .subscribe(
        data => {
           this.data=data;
          console.log(data);
          },
        error => {
          console.log(error);
        });
    }

  ngOnInit(): void {
    
      this.getProfile();

     
      
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
  this.currentName=name;

}
  openNewPage(link) {
    window.open( 
      link, "_blank");
     
  

}

openDialognewCategory():void {
  const dialogRef = this.dialog.open(NewCategoryComponent, {
    data: {id:this.id},
    width: '25%',
  });
  dialogRef.afterClosed().subscribe(
      
    val => {
      console.log(val)
  
        
     const data = {
          name: val.name,
              
         
        };
          
          this.directoryService.create2(val.name,this.id).subscribe(
          response => {
            console.log(response);
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
  
     
        const data = {
          name: val.name,
          description: val.description,
         
        };
          
          this.toolService.create3(val.file,data,val.link,this.id).subscribe(
          response => {
            console.log(response);
           this.change=!this.change;
           
          },
          error => {
            console.log(error);
          }
        
        
        ); 
      }
  

 

);

}
}
