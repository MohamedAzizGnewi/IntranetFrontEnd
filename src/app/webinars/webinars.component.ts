import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-webinars',
  templateUrl: './webinars.component.html',
  styleUrls: ['./webinars.component.css']
})
export class WebinarsComponent implements OnInit {
  @Input() public data: any;
  constructor() { }
  public thumbnailSrc =
  "../";
// tslint:disable-next-line:max-line-length
public cover =
  "../../assets/images/event2.jpg";

public liked = false;

public save(index): void {
  console.log(this.data);
 this.data.etat = !this.data.etat;
}
   
public heartIcon(index): string {

  if (this.data.etat)
  {
    return "k-icon icon2 fas fa-bookmark";
  }
  else {
    return "k-icon icon2 far fa-bookmark";
  }
 
} 
  ngOnInit(): void {
    console.log(this.data);
  }

}
