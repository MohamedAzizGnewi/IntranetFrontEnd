import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { PageChangeEvent } from '@progress/kendo-angular-pager';
import { WebinarsComponent } from '../webinars/webinars.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { NewMarketingEventComponent } from '../new-marketing-event/new-marketing-event.component';
import { UpdateOnlineComponent } from '../update-online/update-online.component';
import { UpdatePresenceComponent } from '../update-presence/update-presence.component';
import { MarkettingEventService } from '../_services/marketting-event.service';
import { UserinfoService } from '../_services/userinfo.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { ProfileService } from '../_services/profile.service';
import { Router, ActivatedRoute } from '@angular/router';
export interface DialogData {
  id: number;
  name: string;
  link: string;
  address: string;
  venu: string;
  description: string;
  start_date: string;
  end_date: string;
}
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  isadmin: boolean = false;
  id_user;
  events: any[] = [];
  events1: any[] = [];
  events2: any[] = [];
  user2: any;
  public Visibilities: any[]=[
    "tunis",
    "france"
  ];
  visibilityX:any;

  Globalvisiblity:String ="tunis";

  setVisibility(vis)
  {
    console.log(this.Globalvisiblity);
    this.Globalvisiblity=this.Visibilities[vis];
    console.log(this.Globalvisiblity);
    this.markettingEventService.getAllVisibility(this.Globalvisiblity).subscribe(
      (data) => {
        let exist: boolean = false;
        let array = [];
        let array1 = [];
        let array2 = [];
        for (var val of data.filter(this.type1)) {
          if (val.users.length != 0) {
            for (var val2 of val.users) {
              if (val2.id === this.id_user) {
                exist = true;
              }
            }
            array.push({
              id: val.id,
              name: val.name,
              description: val.description,
              start_date: val.start_date,
              address: val.address,
              venue: val.venue,
              category: val.categorie,
              image: val.image,
              end_date: val.end_date,
              link: val.event_link,
              type: val.type,
              etat: exist,
            });
          } else {
            array.push({
              id: val.id,
              name: val.name,
              description: val.description,
              start_date: val.start_date,
              address: val.address,
              venue: val.venue,
              category: val.categorie,
              image: val.image,
              end_date: val.end_date,
              link: val.event_link,
              type: val.type,
              etat: false,
            });
          }

          /*array.push({"index":i,"position":i,"name":val.name,"logo":"../../assets/images/folder.png",type:"folder","lastUpdate":val.lastUpdate,"size":val.size});
          i++;*/
        }

        for (var val3 of data.filter(this.type2)) {
          if (val3.users.length != 0) {
            for (var val4 of val3.users) {
              if (val4.id === this.id_user) {
                exist = true;
              }
            }
            array1.push({
              id: val3.id,
              name: val3.name,
              description: val3.description,
              start_date: val3.start_date,
              address: val3.address,
              venue: val3.venue,
              category: val3.categorie,
              image: val3.image,
              end_date: val3.end_date,
              link: val3.event_link,
              type: val3.type,
              etat: exist,
            });
          } else {
            array1.push({
              id: val3.id,
              name: val3.name,
              description: val3.description,
              start_date: val3.start_date,
              address: val3.address,
              venue: val3.venue,
              category: val3.categorie,
              image: val3.image,
              end_date: val3.end_date,
              link: val3.event_link,
              type: val3.type,
              etat: false,
            });
          }

          /*array.push({"index":i,"position":i,"name":val.name,"logo":"../../assets/images/folder.png",type:"folder","lastUpdate":val.lastUpdate,"size":val.size});
          i++;*/
        }
        for (var val5 of data.filter(this.type3)) {
          if (val5.users.length != 0) {
            for (var val6 of val5.users) {
              if (val6.id === this.id_user) {
                exist = true;
              }
            }
            array2.push({
              id: val5.id,
              name: val5.name,
              description: val5.description,
              start_date: val5.start_date,
              address: val5.address,
              venue: val5.venue,
              category: val5.categorie,
              image: val5.image,
              end_date: val5.end_date,
              link: val5.event_link,
              type: val5.type,
              etat: exist,
            });
          } else {
            array2.push({
              id: val5.id,
              name: val5.name,
              description: val5.description,
              start_date: val5.start_date,
              address: val5.address,
              venue: val5.venue,
              category: val5.categorie,
              image: val5.image,
              end_date: val5.end_date,
              link: val5.event_link,
              type: val5.type,
              etat: false,
            });
          }

          /*array.push({"index":i,"position":i,"name":val.name,"logo":"../../assets/images/folder.png",type:"folder","lastUpdate":val.lastUpdate,"size":val.size});
          i++;*/
        }

        this.events = array;
        this.events1 = array1;
        this.events2 = array2;
        console.log(this.events2);
        this.display = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getProfile2() {
    this.profileService.getInformations();
  }

  constructor(
    public tokenStorageService: TokenStorageService,
    private router: Router,
    public profileService: ProfileService,
    public userinfoService: UserinfoService,
    public dialog: MatDialog,
    public markettingEventService: MarkettingEventService
  ) {}

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    console.log('tabChangeEvent => ', tabChangeEvent);
    console.log('index => ', tabChangeEvent.index);
  };
  public thumbnailSrc =
    'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg';
  // tslint:disable-next-line:max-line-length
  public cover =
    'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/black_sea.jpg';

  public liked = false;

  save(index) {
    console.log(index);
    this.liked = !this.liked;
  }

  public pageSize = 3;
  public skip = 0;
  public pagedDestinations = [];
  public total;
  display = false;
  getProfile() {
    this.profileService.getProfile().subscribe(
      (response) => {
        console.log(response);

        this.userinfoService.getUser(response.mail).subscribe((data) => {
          console.log(data);
          if (data.roles[0].name == 'ROLE_MARKETING') {
            this.isadmin = true;
          } else {
            this.isadmin = false;
          }
          this.user2 = data;
          this.id_user = data.id;
          this.getall();
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  public ngOnInit(): void {
    this.getProfile();
  }

  public onPageChange(e: PageChangeEvent): void {
    this.skip = e.skip;
    this.pageSize = e.take;
    this.pageData();
  }

  private pageData(): void {
    this.pagedDestinations = this.events.slice(
      this.skip,
      this.skip + this.pageSize
    );
  }
  public save2(index, id,name,description,start_date,end_date): void {
    console.log(this.events[index]);
    this.events[index].etat = !this.events[index].etat;
    if (this.events[index].etat == true) {
      this.markettingEventService.save(id, this.id_user).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
      window.open('MSTeams:/l/meeting/new?subject='+name+'&startTime='+start_date.slice(5,7)+'%2F'+start_date.slice(8,10)+'%2F'+start_date.slice(0,4)+'%20'+start_date.slice(11,13)+'%3A'+start_date.slice(14)+'%3A00&endTime='+end_date.slice(5,7)+'%2F'+end_date.slice(8,10)+'%2F'+end_date.slice(0,4)+'%20'+end_date.slice(11,13)+'%3A'+end_date.slice(14)+'%3A00&content='+description);
    } else {
      this.markettingEventService.delete(this.id_user, id).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  public save3(index, id,name,description,start_date,end_date): void {
    console.log(this.events1[index]);
    this.events1[index].etat = !this.events1[index].etat;
    if (this.events1[index].etat == true) {
      this.markettingEventService.save(id, this.id_user).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
      window.open('MSTeams:/l/meeting/new?subject='+name+'&startTime='+start_date.slice(5,7)+'%2F'+start_date.slice(8,10)+'%2F'+start_date.slice(0,4)+'%20'+start_date.slice(11,13)+'%3A'+start_date.slice(14)+'%3A00&endTime='+end_date.slice(5,7)+'%2F'+end_date.slice(8,10)+'%2F'+end_date.slice(0,4)+'%20'+end_date.slice(11,13)+'%3A'+end_date.slice(14)+'%3A00&content='+description);
    } else {
      this.markettingEventService.delete(this.id_user, id).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  public save4(index, id,name,description,start_date,end_date): void {
    console.log(this.events2[index]);
    this.events2[index].etat = !this.events2[index].etat;
    if (this.events2[index].etat == true) {
      this.markettingEventService.save(id, this.id_user).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
      window.open('MSTeams:/l/meeting/new?subject='+name+'&startTime='+start_date.slice(5,7)+'%2F'+start_date.slice(8,10)+'%2F'+start_date.slice(0,4)+'%20'+start_date.slice(11,13)+'%3A'+start_date.slice(14)+'%3A00&endTime='+end_date.slice(5,7)+'%2F'+end_date.slice(8,10)+'%2F'+end_date.slice(0,4)+'%20'+end_date.slice(11,13)+'%3A'+end_date.slice(14)+'%3A00&content='+description);
    } else {
      this.markettingEventService.delete(this.id_user, id).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  public heartIcon(index): string {
    if (this.events[index].etat) {
      return 'k-icon icon2 fas fa-bookmark';
    } else {
      return 'k-icon icon2 far fa-bookmark';
    }
  }
  public heartIcon1(index): string {
    if (this.events1[index].etat) {
      return 'k-icon icon2 fas fa-bookmark';
    } else {
      return 'k-icon icon2 far fa-bookmark';
    }
  }
  public heartIcon2(index): string {
    if (this.events2[index].etat) {
      return 'k-icon icon2 fas fa-bookmark';
    } else {
      return 'k-icon icon2 far fa-bookmark';
    }
  }
  type1(element, index, array) {
    return element.type == 'Webinars';
  }
  type2(element, index, array) {
    return element.type == 'Fairs';
  }
  type3(element, index, array) {
    return element.type == 'Internal Events';
  }
  delete(id) {
    this.markettingEventService.delete2(id).subscribe(
      (response) => {
        console.log(response);
        this.getall();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getall() {
    this.markettingEventService.getAll().subscribe(
      (data) => {
        let exist: boolean = false;
        let array = [];
        let array1 = [];
        let array2 = [];
        for (var val of data.filter(this.type1)) {
          if (val.users.length != 0) {
            for (var val2 of val.users) {
              if (val2.id === this.id_user) {
                exist = true;
              }
            }
            array.push({
              id: val.id,
              name: val.name,
              description: val.description,
              start_date: val.start_date,
              address: val.address,
              venue: val.venue,
              category: val.categorie,
              image: val.image,
              end_date: val.end_date,
              link: val.event_link,
              type: val.type,
              etat: exist,
            });
          } else {
            array.push({
              id: val.id,
              name: val.name,
              description: val.description,
              start_date: val.start_date,
              address: val.address,
              venue: val.venue,
              category: val.categorie,
              image: val.image,
              end_date: val.end_date,
              link: val.event_link,
              type: val.type,
              etat: false,
            });
          }

          /*array.push({"index":i,"position":i,"name":val.name,"logo":"../../assets/images/folder.png",type:"folder","lastUpdate":val.lastUpdate,"size":val.size});
          i++;*/
        }

        for (var val3 of data.filter(this.type2)) {
          if (val3.users.length != 0) {
            for (var val4 of val3.users) {
              if (val4.id === this.id_user) {
                exist = true;
              }
            }
            array1.push({
              id: val3.id,
              name: val3.name,
              description: val3.description,
              start_date: val3.start_date,
              address: val3.address,
              venue: val3.venue,
              category: val3.categorie,
              image: val3.image,
              end_date: val3.end_date,
              link: val3.event_link,
              type: val3.type,
              etat: exist,
            });
          } else {
            array1.push({
              id: val3.id,
              name: val3.name,
              description: val3.description,
              start_date: val3.start_date,
              address: val3.address,
              venue: val3.venue,
              category: val3.categorie,
              image: val3.image,
              end_date: val3.end_date,
              link: val3.event_link,
              type: val3.type,
              etat: false,
            });
          }

          /*array.push({"index":i,"position":i,"name":val.name,"logo":"../../assets/images/folder.png",type:"folder","lastUpdate":val.lastUpdate,"size":val.size});
          i++;*/
        }
        for (var val5 of data.filter(this.type3)) {
          if (val5.users.length != 0) {
            for (var val6 of val5.users) {
              if (val6.id === this.id_user) {
                exist = true;
              }
            }
            array2.push({
              id: val5.id,
              name: val5.name,
              description: val5.description,
              start_date: val5.start_date,
              address: val5.address,
              venue: val5.venue,
              category: val5.categorie,
              image: val5.image,
              end_date: val5.end_date,
              link: val5.event_link,
              type: val5.type,
              etat: exist,
            });
          } else {
            array2.push({
              id: val5.id,
              name: val5.name,
              description: val5.description,
              start_date: val5.start_date,
              address: val5.address,
              venue: val5.venue,
              category: val5.categorie,
              image: val5.image,
              end_date: val5.end_date,
              link: val5.event_link,
              type: val5.type,
              etat: false,
            });
          }

          /*array.push({"index":i,"position":i,"name":val.name,"logo":"../../assets/images/folder.png",type:"folder","lastUpdate":val.lastUpdate,"size":val.size});
          i++;*/
        }

        this.events = array;
        this.events1 = array1;
        this.events2 = array2;
        console.log(this.events2);
        this.display = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  openDialogeevent() {
    const dialogRef = this.dialog.open(NewMarketingEventComponent, {
      data: {},
      width: '40%',
    });
    dialogRef.afterClosed().subscribe((val) => {
      console.log(val);

      const data = {
        name: val.name,
        description: val.description,
        event_link: val.link,
        address: val.address,
        venue: val.venue,

        categorie: val.category,
        type: val.type,
        start_date: val.start_date + ' ' + val.start_time,
        end_date: val.end_date + ' ' + val.end_time,
      };
      console.log(data);
      this.markettingEventService.create(val.image, data).subscribe(
        (response) => {
          console.log(response);

          this.getall();
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  updateEvent(id) {
    console.log(id);
    this.markettingEventService.getEvent(id).subscribe(
      (response) => {
        console.log(response);
        if (response.categorie == 'online') {
          const dialogRef = this.dialog.open(UpdateOnlineComponent, {
            data: {
              id: response.id,
              name: response.name,
              link: response.event_link,
              address: response.address,
              venu: response.venue,
              description: response.description,
              start_date: response.start_date,
              end_date: response.end_date,
            },
            width: '40%',
          });
          dialogRef.afterClosed().subscribe((val) => {
            console.log(val);

            const data = {
              name: val.name,
              description: val.description,
              event_link: val.link,
              address: val.address,
              venue: val.venue,
              start_date: val.start_date + ' ' + val.start_time,
              end_date: val.end_date + ' ' + val.end_time,
            };
            console.log(data);
            this.markettingEventService.update(data, response.id).subscribe(
              (response) => {
                console.log(response);
                this.getall();
              },
              (error) => {
                console.log(error);
              }
            );
          });
        } else {
          const dialogRef = this.dialog.open(UpdatePresenceComponent, {
            data: {
              id: response.id,
              name: response.name,
              link: response.event_link,
              description: response.description,
              address: response.address,
              venu: response.venue,
              start_date: response.start_date,
              end_date: response.end_date,
            },
            width: '40%',
          });
          dialogRef.afterClosed().subscribe((val) => {
            console.log(val);

            const data = {
              name: val.name,
              description: val.description,
              event_link: val.link,
              address: val.address,
              venue: val.venue,
              start_date: val.start_date + ' ' + val.start_time,
              end_date: val.end_date + ' ' + val.end_time,
            };
            console.log(data);
            this.markettingEventService.update(data, response.id).subscribe(
              (response) => {
                console.log(response);
                this.getall();
              },
              (error) => {
                console.log(error);
              }
            );
          });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  readMore(id) {
    this.router.navigate(['/events', id, this.id_user]);
  }
}
