import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
   display=false;
  constructor() { }
  public getDisplay(): boolean  {
    return this.display;
  }
  public hide()
  {
    this.display=false;
  }
  public diplay()
  {
    this.display=true;
  }
}
