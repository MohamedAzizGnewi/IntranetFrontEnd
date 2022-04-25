import { Component, OnInit } from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';
import {folder} from "../../shared/folder";
import {Subfolder } from "../../shared/subfolder";
import {File} from "../../shared/files";
import {FolderService} from "../../_services/folder.service";
import {SharedService} from "../../_services/shared.service";
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  panelOpenState = false;
  checked = false;
  customCollapsedHeight: string = '39px';
  TREE_DATA: folder[] ;
  treeControl = new NestedTreeControl<folder>(node => node.subfolder);
  dataSource = new MatTreeNestedDataSource<folder>();

  constructor(private folderService:FolderService,public sharedsevice: SharedService) {
    this.dataSource.data = this.folderService.getFolders();
  }

  hasChild = (_: number, node: folder) => !!node.subfolder && node.subfolder.length > 0;

  ngOnInit(): void {
  this.TREE_DATA=this.folderService.getFolders();
  }

}

