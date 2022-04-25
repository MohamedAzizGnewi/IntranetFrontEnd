import { Injectable } from '@angular/core';
import {folder} from "../shared/folder";
import {Folders} from "../shared/folders";

@Injectable({
  providedIn: 'root'
})

export class FolderService {

  constructor() { }
  getFolders():folder[] {
    return Folders
  }
  getFolder(id:string):folder {
    return Folders.filter((folder)=>(folder.id===id))[0];
  }
}