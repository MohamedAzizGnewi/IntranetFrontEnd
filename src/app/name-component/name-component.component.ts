import { Component, OnInit ,ViewChild,Inject } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {SharedService} from "../_services/shared.service";
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DialogEditComponent} from "../dialog-edit/dialog-edit.component";
import {DialogPermission2Component} from "../dialog-permission2/dialog-permission2.component"
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
export interface PeriodicElement {
  name: string;
  position: number;
  modified: string;
  size: string;
  symbole: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'file1.pdf',symbole:"../../assets/images/pfd.png", modified: "Apr 25, 2021", size: '34.5 Kb'},
  {position: 2, name: 'file2.doc',symbole:"../../assets/images/word.png", modified: "Apr 25, 2020", size: '34.5 Kb'},
  {position: 3, name: 'file3',symbole:"../../assets/images/pfd.png", modified: "Apr 25, 2024", size: '34.5 Kb'},
  {position: 4, name: 'file4',symbole:"../../assets/images/word.png", modified:"Apr 25, 2028", size: '34.5 Kb'},
  {position: 5, name: 'file5',symbole:"../../assets/images/pfd.png",modified: "Apr 25, 2021", size: '34.5 Kb'},
  {position: 6, name: 'file6',symbole:"../../assets/images/excel.png", modified: "Apr 25, 2021", size: '34.5 Kb'},
  {position: 7, name: 'file7',symbole:"../../assets/images/excel.png", modified: "Apr 25, 2021", size: '34.5 Kb'},
  {position: 8, name: 'file8',symbole:"../../assets/images/excel.png", modified: "Apr 25, 2021", size: '34.5 Kb'},
  {position: 9, name: 'file9',symbole:"../../assets/images/pfd.png", modified: "Apr 25, 2021", size: '34.5 Kb'},

];
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-name-component',
  templateUrl: './name-component.component.html',
  styleUrls: ['./name-component.component.css']
})
export class NameComponentComponent implements OnInit {
  modal1: any = {
    folder: null,
    subfolder: null
  };
   checked;
   animal: string;
  name: string;


  displayedColumns: string[] = ['select', 'position','symbole','name', 'modified', 'size','edit' ];
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
  constructor(private sharedsevice: SharedService,public dialog: MatDialog,private router: Router) { }
  ngOnInit() {
 
    console.log(this.sharedsevice.display);
    this.name="may"
}
  display(row) {
    console.log(row);
    this.list.push(row);
    this.file=true;
    console.log(this.list);
    this.sharedsevice.diplay();
    
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
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogEditComponent, {
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  openPermission() : void {
    const dialogRef = this.dialog.open(DialogPermission2Component , {
      data: {name: this.name, animal: this.animal}
    });
  }
  doubleClick()
  {
    console.log("double");
    this.router.navigate(['/pdf'] );
  }

}