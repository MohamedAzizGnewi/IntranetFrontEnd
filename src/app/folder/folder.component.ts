import { Component, OnInit ,ViewChild ,Input} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {SharedService} from "../_services/shared.service";
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {SubdirectoryService} from "../././_services/subdirectory.service";
import {Subdirectory} from "../_models/subdirectory";
import {Directory2Service} from "../_services/directory2.service"
export interface PeriodicElement {
  name: string;
  position: number;
  modified: string;
  size: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Word Templates ', modified: "Apr 25, 2021", size: '34.5 Kb'},
  {position: 2, name: 'Powerpoint Templates', modified: "Apr 25, 2020", size: '34.5 Kb'},
  {position: 3, name: 'E-mail Signature', modified: "Apr 25, 2024", size: '34.5 Kb'},
  

];
@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {
  @Input() item = ''; // decorate the property with @Input()
   ELEMENT_DATA: Subdirectory[]=[];
    id;
    modal1: any = {
      folder: null,
      subfolder: null
    };
     checked;
    
    displayedColumns: string[] = ['select', 'position','name', 'modified', 'size' ];
   dataSource ;
   selection = new SelectionModel<any>(true, []);
 
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    
    getSubdirectorys() {
      this.ELEMENT_DATA=[];
      this.directoryService.getDirectorys(this.id)
        .subscribe(
        
          data => {
            console.log(data+"poooooooooo")
            for (var val of data) {
         
            this.ELEMENT_DATA.push( new Subdirectory(val.id,val.name,val.lastUpdate,val.size));}
            this.dataSource = new MatTableDataSource<Subdirectory>(this.ELEMENT_DATA);
           
            },
          
          error => {
            console.log(error);
          });
          this.directoryService.getFiles(this.id)
          .subscribe(
          
            data => {
              console.log(data+"poooooooooo")
              for (var val of data) {
           
              this.ELEMENT_DATA.push( new Subdirectory(val.id,val.name,val.lastUpdate,val.size));}
              this.dataSource = new MatTableDataSource<Subdirectory>(this.ELEMENT_DATA);
             
              },
            
            error => {
              console.log(error);
            });

      }
  
    list: Array<String> = []; 
  
    file=false;
    constructor(private sharedsevice: SharedService, private route: ActivatedRoute,private router: Router,private subdirectoryService: SubdirectoryService,private directoryService: Directory2Service) { 
      route.params.subscribe(val => {
        console.log("up")
        this.id=val.id;
        this.getSubdirectorys();

      });
     
     
    }
    ngOnInit() {

      console.log(this.item)
      
  }
    display(row) {
   
      
  }
  doubleClick()
  {
    console.log("double");
    this.router.navigate(['marketing/materials/file'] );
  }
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
    masterToggle() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.data.forEach(row => this.selection.select(row));
    }
    checkboxLabel(row?: Subdirectory): string {
      if (!row) {
        return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
  
    handleMouseOver(row) {
      const position = row.position;
      this.ELEMENT_DATA.map((data: any) => {
        if (data.position === position) {
          data.show = true;
        }
      });
    }
  
    handleMouseLeave(row) {
      const position = row.position;
      this.ELEMENT_DATA.map((data: any) => {
        if (data.position === position) {
          data.show = false;
        }
      });
      
    }
  
    addShowCheckboxProperty() {
      this.ELEMENT_DATA.map((data: any) => {
        data.show = false
      });
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  
  }
