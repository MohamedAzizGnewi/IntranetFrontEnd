import { Component, OnInit ,ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {SharedService} from "../_services/shared.service";
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
export interface PeriodicElement {
  name: string;
  position: number;
  modified: string;
  size: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'folder1', modified: "Apr 25, 2021", size: '34.5 Kb'},
  {position: 2, name: 'folder2', modified: "Apr 25, 2020", size: '34.5 Kb'},
  {position: 3, name: 'folder3', modified: "Apr 25, 2024", size: '34.5 Kb'},
 

];
@Component({
  selector: 'app-folder-content',
  templateUrl: './folder-content.component.html',
  styleUrls: ['./folder-content.component.css']
})
export class FolderContentComponent implements OnInit {

  modal1: any = {
    folder: null,
    subfolder: null
  };
   checked;

  displayedColumns: string[] = ['select', 'position','name', 'modified', 'size' ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  list: Array<String> = [];

  file=false;
  constructor(private sharedsevice: SharedService, private route: ActivatedRoute,private router: Router ) { 
    
  }
  ngOnInit() {
 
    console.log(this.sharedsevice.display)
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
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  handleMouseOver(row) {
    const position = row.position;
    ELEMENT_DATA.map((data: any) => {
      if (data.position === position) {
        data.show = true;
      }
    });
  }

  handleMouseLeave(row) {
    const position = row.position;
    ELEMENT_DATA.map((data: any) => {
      if (data.position === position) {
        data.show = false;
      }
    });
  }

  addShowCheckboxProperty() {
    ELEMENT_DATA.map((data: any) => {
      data.show = false
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}