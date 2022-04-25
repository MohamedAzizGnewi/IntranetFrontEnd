import { Component, OnInit } from '@angular/core';
import {IdeaService} from "../_services/idea.service"
import {ProfileService} from "../_services/profile.service"
import {UserinfoService} from "../_services/userinfo.service";
@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {
    public liked = false;
    show=false;
    id;
    next;
  public toggleLike(): void {
    this.liked = !this.liked;
  }
  public heartIcon2(index): string {
   if(this.show) {
    if (this.view[index].etat)
    {
      return "k-icon icon2 fas fa-bookmark";
    }
    else {
      return "k-icon icon2 far fa-bookmark";
    }
   }
 
  }
public articleURL(name: string): string {
    return 'https://demos.telerik.com/blazor-ui/images/articles/' + name;
}
  constructor(public ideaService :IdeaService,public profileService:ProfileService,public userinfoService:UserinfoService) { }
  public articles: any[]  = [
    {
        title: 'How to Make Games for Everyone',
        subtitle: 'Why the new player’s experience matters',
        date: 'Jan 21,  2020',
        imageName: '1-220x140.png'
    },
    {
        title: 'How to design with love?',
        subtitle: '7 tips to fall in love with your job.',
        date: 'Feb 24,  2020',
        imageName: '2-220x140.png'
    },
    {
        title: 'A good designer is an Emotional Polymath — what?',
        subtitle: 'Polymaths describes a person whose expertise spans a significant number of realities. ',
        date: 'Jan 16,  2020',
        imageName: '3-220x140.png'
    },
    {
        title: 'Why Minimalist Logos Are the Best for Big Business',
        subtitle: 'Analyzing logos from giants like Netflix, Youtube, and Google',
        date: 'Feb 20, 2020',
        imageName: '4-220x140.png'
    },
    {
        title: 'Money, Likes, and Memes Are All the Same Thing',
        subtitle: 'How the token economy has replaced cash with Twitch emotes and Instagram likes',
        date: 'Feb 13, 2020',
        imageName: '5-220x140.png'
    },
    {
        title: 'From UX to UI development',
        subtitle: 'The transition between the stages of the digital design process',
        date: 'Jan 11, 2020',
        imageName: '6-220x140.png'
    },
    {
        title: '7 Things Mentally Strong People Avoid Doing',
        subtitle: 'Become your own mental strength coach',
        date: 'Jan 17, 2020',
        imageName: '7-220x140.png'
    },
    {
        title: 'How to Solve Your `Lack of Motivation` Problem',
        subtitle: 'Hint: Understand that lack of motivation is a lie.',
        date: 'Mar 5, 2020',
        imageName: '8-220x140.png'
    },
    {
        title: 'Make it a habit to externalize your design work',
        subtitle: 'Move faster by revealing the process through sketches, whiteboards and by printing your work out',
        date: 'Feb 12, 2020',
        imageName: '9-220x140.png'
    },
    {
        title: 'Morning Routines That Will Help You Feel More Energized',
        subtitle: 'Skip your cup of coffee and do these instead.',
        date: 'Feb 19, 2020',
        imageName: '10-220x140.png'
    },
    {
        title: 'What Color is Your Name? A New Synesthesia Tool Will Show You',
        subtitle: 'Here`s your chance to see how people with synesthesia perceive letters and numbers',
        date: 'Feb 3, 2020',
        imageName: '11-220x140.png'
    },
    {
        title: 'When it comes to design, your eyes are way better than maths',
        subtitle: 'A quick look at how mathematics is not the ultimate source of design thruth',
        date: 'Feb 22, 2020',
        imageName: '12-220x140.png'
    },
    {
        title: 'Microinteractions: small details matter',
        subtitle: 'Microinteractions are the small details that exist inside features. ',
        date: 'Jan 7, 2020',
        imageName: '13-220x140.png'
    },
    {
        title: 'Key principles in animation',
        subtitle: 'Animated interfaces are full of life and emotions. Animations add life to static things.',
        date: 'Mar 24, 2020',
        imageName: '14-220x140.png'
    },
    {
        title: 'The 60-30-10 Rule of Time Management',
        subtitle: 'A simple framework for allocating your time.',
        date: 'Mar 13, 2020',
        imageName: '15-220x140.png'
    },
    {
        title: 'Real-time mobile UI/UX prototyping with Figma Mirror',
        subtitle: 'Today many design teams are transferring their design system from Sketch and Adobe XD to Figma.',
        date: 'Jan 30, 2020',
        imageName: '16-220x140.png'
    },
    {
        title: '5 apps that will turn your mobile phone into a productivity machine',
        subtitle: 'Instead of letting your mobile device become detrimental to your productivity, here are tips to turn your phone into a productivity machine.',
        date: 'Jan 9, 2020',
        imageName: '17-220x140.png'
    },
    {
        title: 'Lessons I`ve Learned From Studying Money for 10 Years',
        subtitle: 'Master money, and you`ll be able to do more work you enjoy and less work of the bill-paying variety.',
        date: 'Mar 14, 2020',
        imageName: '18-220x140.png'
    },
    {
        title: 'The 5-Year Rule: How to Create the Future You Want',
        subtitle: 'A proven process for building your dream life',
        date: 'Feb 11, 2020',
        imageName: '19-220x140.png'
    },
    {
        title: 'Creativity is only impressive when there`s restrictions',
        subtitle: 'Why `form follows function` is a valid design principle in today`s web design landscape',
        date: 'Feb 18, 2020',
        imageName: '20-220x140.png'
    },
    {
        title: '3 areas of focus to becoming a better Product Designer',
        subtitle: 'Close Sketch. Stop browsing Dribbble. Forget color for a second.',
        date: 'Jan 23, 2020',
        imageName: '21-220x140.png'
    },
    {
        title: 'The secret of usable design',
        subtitle: 'Improving usability through emotional, reflective and visceral design.',
        date: 'Feb 26, 2020',
        imageName: '22-220x140.png'
    },
    {
        title: 'When You Eat Is More Important Than What You Eat',
        subtitle: 'A practical guide to time-restricted eating',
        date: 'Mar 23, 2020',
        imageName: '23-220x140.png'
    },
    {
        title: 'Breaking into Design',
        subtitle: 'How to grow as a designer and land your first position in the field',
        date: 'Mar 4, 2020',
        imageName: '24-220x140.png'
    },
    {
        title: 'What`s the Difference Between Brand and Brand Identity',
        subtitle: 'Semantics and the Quest for Truth',
        date: 'Feb 16, 2020',
        imageName: '25-220x140.png'
    }
];
  public view: any[] = [];

  public ngOnInit(): void {
      this.loadMore();
  } 
  public save4(index,id): void {
  
    this.view[index].etat=!this.view[index].etat;
    if(this.view[index].etat)
   {  this.view[index].vote=this.view[index].vote +1
       
    this.ideaService.save(id,this.id).subscribe(
      response => {
       
       console.log(response);
     
   
       
      },
      error => {
        console.log(error);
      }
  
  
    );}
    else {
        this.view[index].vote=this.view[index].vote -1
      this.ideaService.delete(this.id,id).subscribe(
        response => {
         
            console.log(response);
          
        },
        error => {
          console.log(error);
        }
    
    
      );
    }

  }
  get(next)  {
    this.ideaService.getAll(next).subscribe(
        response => {
            this.show=true;
            let exist:boolean=false;
            let array=[];
            for (var val of response) {
                if(val.users.length!=0)
                 
               {  for (var val2 of val.users )
                  {  
                    if(val2.id===this.id) {
                       exist=true;
                     }
      
                  }
                  array.push({"id":val.id,"content":val.content,"etat":exist,"vote":val.users.length})
               }
               else {
                array.push({"id":val.id,"content":val.content,"etat":false,"vote":val.users.length})
                
               } 
      
      
      
      
                /*array.push({"index":i,"position":i,"name":val.name,"logo":"../../assets/images/folder.png",type:"folder","lastUpdate":val.lastUpdate,"size":val.size});
                i++;*/
              }
         console.log(array);
          this.view = [
            ...this.view,
            ...array
        ];
       
        },
        error => {
          console.log(error);
        }
    
    
      );
  }

  public loadMore(): void {
   
      const next = this.view.length;
      if(this.next!=next) {
          this.next=next;
        this.profileService.getProfile().subscribe(
            response => {
              console.log(response);
             
              this.userinfoService.getUser(response.mail).subscribe((data) => {
                console.log(data);
                this.id=data.id;
                this.get(this.next);
             
                
               
              });
             
            },
            error => {
              console.log(error);
            }
        
          
          );  
      }
     
   
   
   
  }
  public addIdea() {
    
  }
  public handleFilterChange(query: string): void {
    let result=undefined;
    let show=false;
      this.show=false;
      const normalizedQuery = query.toLowerCase();
     
      const filterExpession = (item) =>
      item.content.toLowerCase().indexOf(normalizedQuery) !== -1 ;
  
        this.view = this.view.filter(filterExpession);;
       

         setTimeout(function() {
          console.log('hide');
          this.show=true;
        }.bind(this), 2000);
        
    
    
        

  }
}
