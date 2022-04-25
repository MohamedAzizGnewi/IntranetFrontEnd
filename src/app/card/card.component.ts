import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() public article: {
    title: string;
    subtitle: string;
    date: string;
    imageName: string;
};

@Input() public borderBottom: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  public liked = false;s
  public toggleLike(): void {
    this.liked = !this.liked;
  }
  public heartIcon(): string {
    return this.liked ? "k-icon k-i-heart" : "k-icon k-i-heart-outline";
  }
public articleURL(name: string): string {
    return 'https://demos.telerik.com/blazor-ui/images/articles/' + name;
}
}
