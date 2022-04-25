import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MarkettingEventService} from "../_services/marketting-event.service";
@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,public markettingEventService:MarkettingEventService) { }
  id: number;
  id_user:number;
  private sub: any;
  public event:any;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.id_user=+params['id2'];
       // In a real app: dispatch action to load the details here.
    });
    console.log(this.id_user)
    this.markettingEventService.get(this.id).subscribe(
      val => {
        let exist:boolean=false;
        if(val.users.length!=0)
           
        {  for (var val2 of val.users )
           {  
             if(val2.id===this.id_user) {
                exist=true;
              }

           }
           this.event={"id":val.id,"name":val.name,"description":val.description,"start_date":val.start_date,
           "address":val.address,"venue":val.venue,"category":val.categorie,"image":val.image,
           "end_date":val.end_date,"link":val.event_link,"type":val.type,"etat":exist};
        }
        else {
          this.event={"id":val.id,"name":val.name,"description":val.description,"start_date":val.start_date,"address":val.address,"venue":val.venue,"category":val.categorie,
         "image":val.image,
         "end_date":val.end_date,"link":val.event_link,"type":val.type,"etat":false};
         
        } 
        this.event
        console.log( this.event);
       
       
      },
      error => {
        console.log(error);
      }
  
  
    );
  }
  public heartIcon2(): string {

    if (this.event.etat)
    {
      return "k-icon icon2 fas fa-bookmark";
    }
    else {
      return "k-icon icon2 far fa-bookmark";
    }
    
   
  } 
  public save4(id): void {
 
 
    this.event.etat=!this.event.etat;
    if(this.event.etat==true)
   {this.markettingEventService.save(id,this.id_user).subscribe(
      response => {
        console.log(response);
     
       
      },
      error => {
        console.log(error);
      }
  
  
    );}
    else {
      this.markettingEventService.delete(this.id_user,id).subscribe(
        response => {
          console.log(response);
       
         
        },
        error => {
          console.log(error);
        }
    
    
      );
    }
   
  }
   
  }


