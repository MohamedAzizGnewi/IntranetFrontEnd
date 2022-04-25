import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../_services/shoppingCart.service';
import { UserinfoService } from '../_services/userinfo.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { ProfileService } from '../_services/profile.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,public shoppingCartService:ShoppingCartService,public profileService: ProfileService,
    public userinfoService: UserinfoService,) { }
  id: number;
  id_user:number;
  id_user2:number;
  username:string;
  Quantity:number;

  private sub: any;
  public event:any;
  user2: any;
  getValue(val:number)
  {
    this.Quantity=val;
  }
  getProfile() {
    this.profileService.getProfile().subscribe(
      (response) => {
        console.log(response);

        this.userinfoService.getUser(response.mail).subscribe((data) => {
          console.log(data);
          this.user2 = data;
          this.id_user2 = data.id;
          this.username = data.username;

        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit() {
    this.getProfile();
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.id_user=+params['id2'];
       // In a real app: dispatch action to load the details here.
    });
    console.log(this.id_user)
    this.shoppingCartService.get(this.id).subscribe(
      value => {
        let exist:boolean=false;
        if(value.users.length!=0)
           
        {  for (var value2 of value.users )
           {  
             if(value2.id===this.id_user) {
                exist=true;
              }

           }
           this.event={"id":value.id,"name":value.name,"description":value.description,"price":value.price,
           "quantity":value.quantity,"image":value.image,
           "type":value.type,"etat":exist};

        }
        else {
          this.event={"id":value.id,"name":value.name,"description":value.description,"price":value.price,
          "quantity":value.quantity,"image":value.image,
          "type":value.type,"etat":false};
         
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
      return "k-icon icon2 fa fa-cart-arrow-down";
    }
    else {
      return "k-icon icon1 fa fa-cart-plus";
    }
    
   
  } 
  public save4(id,name,quantity): void {
 
 
    this.event.etat=!this.event.etat;
    if(this.event.etat==true)
   {this.shoppingCartService.save(id,this.id_user).subscribe(
      response => {
        console.log(response);
     
       
      },
      error => {
        console.log(error);
      }
  
  
    );
    window.open("https://outlook.office.com/mail/deeplink/compose?to=to_address&subject=subject&body=Hello%0AUser%20name%20:%20"+this.username+"%0AItem%20:%20"+name+"%0AQuantity%20:%20"+quantity+"%0AThank%20you.")
  }
    else {
      this.shoppingCartService.delete(id,this.id_user).subscribe(
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
