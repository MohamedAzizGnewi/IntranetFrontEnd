import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ClockComponent } from '../../clock/clock.component';
import { RubriqueComponent } from '../../rubrique/rubrique.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { FileInfo, FileRestrictions } from '@progress/kendo-angular-upload';
import { NewActualityComponent } from '../../new-actuality/new-actuality.component';
import { ActualityService } from '../../_services/actuality.service';
import { UserinfoService } from '../../_services/userinfo.service';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { FlashService } from '../../_services/flash.service';
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProfileService } from '../../_services/profile.service';
import {
  AccessibilityConfig,
  Action,
  ButtonEvent,
  ButtonsConfig,
  ButtonsStrategy,
  ButtonType,
  Description,
  DescriptionStrategy,
  DotsConfig,
  GalleryService,
  Image,
  ImageModalEvent,
  KS_DEFAULT_BTN_CLOSE,
  KS_DEFAULT_BTN_DELETE,
  KS_DEFAULT_BTN_DOWNLOAD,
  KS_DEFAULT_BTN_EXTURL,
  KS_DEFAULT_BTN_FULL_SCREEN,
  // KS_DEFAULT_BTN_ROTATE,
  PreviewConfig,
  LoadingConfig,
  LoadingType,
  CurrentImageConfig,
} from '@ks89/angular-modal-gallery';
import { TokenStorageService } from '../../_services/token-storage.service';
import { ChildProcessService } from 'ngx-childprocess';
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',

  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  flashs_info: any[] = [];
  change: boolean = false;
  show_pulsing = false;
  show_actuality: boolean;
  show = false;
  showNavigationIndicators = false;
  flash: any[] = [];
  recruits: any[];
  
  i = 0;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2021-06-01' },
      { title: 'event 2', date: '2021-06-02' },
    ],
  };
  calendarOptions2: CalendarOptions = {
    initialView: 'dayGridWeek',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2021-06-01' },
      { title: 'event 2', date: '2021-06-02' },
    ],
  };
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
  }
  public events: string[] = [];
  chaine1 = "{'background-image' : data:image/gif;base64,";
  chaine2 = ")'}";
  public listItems: Array<string> = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
  uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint
  id = 1;
  next = undefined;
  id2 = 1;
  user: any;
  user2: any;
  base64 = '';
  current_index;
  post: any = {
    visibility: null,
    content: null,
  };
  isadmin = false;
  form: FileInfo[];
  panelOpenState = false;
  class: string;

  class_like: string = 'btn button-like col-4';

  class_event: string =
    'btn btn-default btn-lg col-sm-6 col-lg-4 button-event ml-2';

  nombre_click_like = 0;

  checkbox = { Online: true };

  show_comment = false;
  image(base64) {
    return 'background-image :' + this.chaine1 + base64 + this.chaine2;
  }
  credentials = { actuality: 'actuality', event: '', comment: '' };
  pictures: any[] = [];
  data: any[] = [];

  values: any[] = [
    { value: 'public', viewValue: ' public' },

    { value: 'Tunis', viewValue: 'Tunis' },

    { value: 'France', viewValue: 'France' },

    { value: 'Singapour', viewValue: 'Singapour' },

    { value: 'Genéve', viewValue: 'Genéve' },
  ];

  comments: any[] = [];

  images: any[] = [
    {
      number: 1,

      src: '../../../assets/images/t.jpg',

      alt: 'Second slide',

      style: 'none',
    },

    {
      number: 2,

      src: '../../../assets/images/wom.jpg',

      alt: 'Third slide',

      style: 'none',
    },

    {
      number: 3,

      src: '../../../assets/images/p.jpg',

      alt: 'Fourth slide',

      style: 'none',
    },
  ];

  current = 0;

  textAreaValue = '';

  constructor(
    public profileService: ProfileService,
    public dialog: MatDialog,
    public actualityService: ActualityService,
    config: NgbCarouselConfig,
    public flashService: FlashService,
    public tokenStorageService: TokenStorageService,
    public userinfoService: UserinfoService,
    private childProcessService: ChildProcessService
  ) {
    config.showNavigationIndicators = false;
  }

  open() {
    console.log('ok');
    console.log('isElectronApp ' + this.childProcessService.isElectronApp);
    /*let options: string[] = [];
        let args: string[] = [];
        let callback: string[] = [];
        this.childProcessService.childProcess.exec('java --v', 
                                              options,
                                              (data) => {console.log(data);});
        const shell = require('shelljs') ;
        shell.exec('C:\Users\may.louati\Desktop\a\vlc-3.0.16-win64.exe');
                                              
          var ws = new ActiveXObject("WScript.Shell");
        ws.Exec("C:\Users\may.louati\Desktop\a\vlc-3.0.16-win64.exe");*/
    var URL = 'http://127.0.0.1:8887/a/vlc-3.0.16-win64.exe';
    window.open(URL, null);
  }
  public thumbnailSrc =
    'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg';
  public cover =
    'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/black_sea.jpg';

  public liked = false;

  pays;

  public recruitments: any[] = [
    {
      name: 'May Louati',
      poste: 'developer',
      url: '../../../assets/images/may.jpg',
    },
    {
      name: 'Mariem Tounsi',
      poste: 'developer',
      url: '../../../assets/images/profil1.jpg',
    },
    {
      name: 'Paul Jean',
      poste: 'developer',
      url: '../../../assets/images/profil2.jpg',
    },
  ];
  public width = '300px';
  public height = '300px';
  public width2 = '100%';
  public height2 = '300px';
  getRecruitments() {
    this.userinfoService.getUsersRecruitments().subscribe(
      (response) => {
        console.log(response);
        this.recruits = response;
        this.show = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getuserinfo(id) {
    this.userinfoService.getAll(id).subscribe(
      (response) => {
        console.log(response);
        this.user2 = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public toggleLike(id_actuality, index): void {
    this.data[index].exist = !this.data[index].exist;
    if (this.data[index].exist) {
      this.data[index].likemessage.push({
        actuality: this.data[index],
        date_created: '',
        date_updated: '',
        user_like: this.user2,
      });
      this.addlike(id_actuality);
    } else {
      this.deletelike(id_actuality);
      this.data[index].likemessage.forEach((element, index) => {
        if (element.user_like.id == this.id)
          this.data[index].likemessage.splice(index, 1);
      });
    }
  }
  /*
  public heartIcon(index): string {
    let exist=false;
    for(var val of this.data[index].likemessage)
    {  if(val.user_like.id==this.id)
        {  exist=true;

        }

    }
    if(exist)

     {return "k-icon icon2 fas fa-heart";}
     
   else {
    return "k-icon icon2 far fa-heart";
   }
    
    
  }*/
  public heartIcon(index): string {
    if (this.show) {
      if (this.data[index].exist) {
        return 'k-icon icon2 fas fa-heart';
      } else {
        return 'k-icon icon2 far fa-heart';
      }
    }
  }
  addComment2(id_actuality, index) {
    console.log(this.data[index].textValue);
    let comment = this.data[index].textValue;
    this.data[index].commentmessage.push({
      actuality: this.data[index],
      comment: comment,
      date_created: '',
      date_updated: '',
      user_comment: this.user2,
    });
    this.clearValue(id_actuality, index);
    this.actualityService.comment(id_actuality, this.id, comment).subscribe(
      (response) => {},
      (error) => {
        console.log(error);
      }
    );
  }
  addlike(id_actuality) {
    this.actualityService.like(id_actuality, this.id).subscribe(
      (response) => {},
      (error) => {
        console.log(error);
      }
    );
  }
  deletelike(id_actuality) {
    this.actualityService.delete_like(id_actuality, this.id).subscribe(
      (response) => {
        this.getAll2(this.pays);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  public getpictures(v1) {
    this.actualityService.getAll2(v1).subscribe(
      (response) => {
        function sortByDate(a, b) {
          if (a.date_created < b.date_created) {
            return 1;
          }
          if (a.date_created > b.date_created) {
            return -1;
          }
          return 0;
        }
        response.sort(sortByDate);

        let i = 0;
        for (var val of response) {
          let array1: any[] = [];
          for (var val2 of val.files) {
            array1.push({
              src: 'data:image/gif;base64,' + val2.base64,
              src2: 'url("data:image/gif;base64,' + val2.base64,
              actuality: val.id,
            });
          }
          this.pictures[i] = array1;
          i++;
        }
        console.log(this.pictures);
      },
      (error) => {
        console.log(error);
      }
    );

    console.log(this.pictures);
  }
  addComment(id_actuality, index) {
    this.addComment2(id_actuality, index);
  }
  public getAll3(v1, next) {
    this.actualityService.getAll3(v1, next).subscribe(
      (response) => {
        this.show_pulsing = false;
        function sortByDate(a, b) {
          if (a.date_created < b.date_created) {
            return 1;
          }
          if (a.date_created > b.date_created) {
            return -1;
          }
          return 0;
        }

        let exist: boolean = false;
        for (var val of response) {
          if (val.likemessage != 0) {
            for (var val2 of val.likemessage) {
              if (val2.user_like.id == this.id) {
                exist = true;
              }
            }
            val['exist'] = exist;
          } else {
            val['exist'] = false;
          }
        }
        this.data = [...this.data, ...response];

        let array1: any[] = [];

        let i = next;
        for (var val of response) {
          val['textValue'] = '';
          val['show_comments'] = false;
          val['images'] = [];
          let array1: any[] = [];
          for (var val2 of val.files) {
            array1.push({
              src: 'data:image/gif;base64,' + val2.base64,
              src2: 'url("data:image/gif;base64,' + val2.base64,
              style: 'none',
            });
          }
          this.pictures[i] = array1;
          i++;
        }

        console.log(this.data);
        //this.getflash();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  public getAll3_1(v1, next) {
    this.actualityService.getAll3(v1, next).subscribe(
      (response) => {
        function sortByDate(a, b) {
          if (a.date_created < b.date_created) {
            return 1;
          }
          if (a.date_created > b.date_created) {
            return -1;
          }
          return 0;
        }
        this.show = true;
        this.show_actuality = true;
        let exist: boolean = false;
        for (var val of response) {
          if (val.likemessage != 0) {
            for (var val2 of val.likemessage) {
              if (val2.user_like.id == this.id) {
                exist = true;
              }
            }
            val['exist'] = exist;
          } else {
            val['exist'] = false;
          }
        }
        this.data = [...this.data, ...response];

        let array1: any[] = [];

        let i = next;
        for (var val of response) {
          val['textValue'] = '';
          val['show_comments'] = false;
          val['images'] = [];
          let array1: any[] = [];
          for (var val2 of val.files) {
            array1.push({
              src: 'data:image/gif;base64,' + val2.base64,
              src2: 'url("data:image/gif;base64,' + val2.base64,
              style: 'none',
            });
          }
          this.pictures[i] = array1;
          i++;
        }

        this.show_pulsing = false;
        console.log(this.data);
        //this.getflash();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getflash() {
    this.flashService.getAll2(this.pays).subscribe(
      (response) => {
        console.log(response);
        this.flashs_info = response;
        this.change = !this.change;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  public getAll(v1) {
    this.actualityService.getAll2(v1).subscribe(
      (response) => {
        console.log(response);
        let array1: any[] = [];
        let i = 0;
        for (var val of response) {
          val['show_comments'] = false;
          val['images'] = [];
          let array1: any[] = [];
          for (var val2 of val.files) {
            array1.push({
              src: 'data:image/gif;base64,' + val2.base64,
              src2: 'url("data:image/gif;base64,' + val2.base64,
              style: 'none',
            });
          }
          this.pictures[i] = array1;
          i++;
        }

        console.log(this.pictures);
        this.data = response;
        console.log(this.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public getAll2(v1) {
    this.actualityService.getAll2(v1).subscribe(
      (response) => {
        function sortByDate(a, b) {
          if (a.date_created < b.date_created) {
            return 1;
          }
          if (a.date_created > b.date_created) {
            return -1;
          }
          return 0;
        }
        response.sort(sortByDate);
        console.log(response);
        let i = 0;
        for (var val of response) {
          val['show_comments'] = this.data[i].show_comments;
          i++;
        }

        this.data = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  openDialogeactualityt() {
    const dialogRef = this.dialog.open(NewActualityComponent, {
      data: {},
      width: '25%',
    });
    dialogRef.afterClosed().subscribe((val) => {
      console.log(val);

      if (val.type == 'actuality') {
        this.show_actuality = false;
        const data = {
          visibility: val.visibility,
          content: val.content,
        };
        this.data = [];
        this.pictures = [];
        this.next = -1;
        this.actualityService.create(val.images, data, this.id).subscribe(
          (response) => {
            console.log(response);

            this.loadMore();
          },
          (error) => {
            console.log(error);
          }
        );
      } else if (val.type == 'flash') {
        const data = {
          visibility: val.visibility,
          tilte: val.title,
          description: val.description,
          date_end: val.date_end,
        };

        this.flashService.create(val.image, data, this.id).subscribe(
          (response) => {
            console.log(response);
            this.getflash();
          },
          (error) => {
            console.log(error);
          }
        );
        console.log(val);
      }
    });
  }
  public clearValue(id_actuality, index): void {
    this.data[index].textValue = '';
  }
  getUser() {
    this.profileService.getUser('mokhtar.najjar@newaccess.ch').subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getProfile() {
    this.profileService.getProfile().subscribe(
      (response) => {
        console.log(response);
        this.user = response;
        this.userinfoService.getUser(response.mail).subscribe((data) => {
          console.log(data);
          this.user2 = data;
          this.pays = data.pays;

          this.getAll3(data.pays, this.next);

          // window.sessionStorage.setItem("user",data);
          //window.sessionStorage.setItem("id",data.id);
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getProfile2() {
    this.user2 = this.profileService.getInformations();
  }
  getPhoto() {
    this.profileService.getPhoto().subscribe(
      (response) => {
        var reader = new FileReader();
        reader.readAsDataURL(response);
        reader.onloadend = function () {
          var base64String: string = reader.result as string;

          console.log('Base64 String without Tags- ', base64String);
        };
      },
      (error) => {
        console.log(error);
      }
    );
  }
  loadMore() {
    this.show_pulsing = true;
    const next = this.data.length;

    if (this.next != next) {
      console.log(next);
      this.next = next;
      if (this.next == 0) {
        this.profileService.getProfile().subscribe(
          (response) => {
            this.user = response;
            this.userinfoService.getUser(response.mail).subscribe((data) => {
              console.log(data);
              if (
                data.roles[0].name == 'ROLE_MARKETING' ||
                data.roles[0].name == 'ROLE_RH'
              ) {
                this.isadmin = true;
              } else {
                this.isadmin = false;
              }
              this.user2 = data;
              this.pays = data.pays;

              this.getAll3_1(data.pays, this.next);

              // window.sessionStorage.setItem("user",data);
              //window.sessionStorage.setItem("id",data.id);
            });
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        this.getAll3(this.user2.pays, this.next);
      }
    }
  }
  ngOnInit(): void {
    this.getRecruitments();
    this.loadMore();
  }

  add_event() {
    this.class_event =
      'btn btn-default btn-lg col-4 button-event ml-2 button-event-click';
  }

  comment(id, index) {
    this.data[index].show_comments = true;
  }

  like() {
    this.nombre_click_like = this.nombre_click_like + 1;

    if (this.nombre_click_like % 2 == 0) {
      this.class_like = 'btn btn-default btn-lg col-4 button-like';
    } else {
      this.class_like = 'btn btn-default btn-lg col-4 button-like-click ';
    }
  }

  ngDoCheck(): void {
    if (this.credentials.actuality == 'actuality') {
      this.class = 'row container-post';
    } else if (this.credentials.actuality == 'event') {
      this.class = 'row container-post2';
    }
  }

  range = new FormGroup({
    start: new FormControl(),

    end: new FormControl(),
  });

  plusSlides() {
    var j;

    var slideIndex = this.current + 1;

    var lenght = this.pictures[this.current_index].length;

    if (slideIndex > lenght - 1) {
      slideIndex = 0;
    }

    for (j = 0; j < lenght; j++) {
      this.pictures[this.current_index][j].style = 'none';
    }

    this.pictures[this.current_index][slideIndex].style = 'block';

    this.current = slideIndex;
  }

  moinsSlides() {
    var j;

    var slideIndex = this.current - 1;

    var lenght = this.images.length;

    if (slideIndex < 0) {
      slideIndex = lenght - 1;
    }

    for (j = 0; j < lenght; j++) {
      this.images[j].style = 'none';
    }

    this.images[slideIndex].style = 'block';

    this.current = slideIndex;
  }

  display(i) {
    console.log(i);

    var j;

    var slideIndex = i;

    var lenght = this.images.length;

    for (j = 0; j < lenght; j++) {
      this.images[j].style = 'none';
    }

    console.log('oko');

    this.images[i].style = 'block';

    console.log('okeeeo');

    this.current = slideIndex;

    console.log('rrrrrrr');
  }
  close() {}
  display2(index, number) {
    this.current_index = index;

    var j;
    var slideIndex = number;
    var lenght = this.pictures[index].length;
    for (j = 0; j < lenght; j++) {
      this.pictures[index][j].style = 'none';
    }

    this.pictures[index][number].style = 'block';
    this.current = slideIndex;
  }
  selectFile(event) {
    console.log('rr0' + event.target.files.item(0));
  }

  onSubmit() {
    console.log(this.credentials.actuality);
  }
  onSubmit2() {
    const { content, visibility } = this.post;
    console.log(content);
    console.log(visibility);

    console.log(this.form[0]['rawFile']);
  }
  onSelectFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
    }
  }
  deleteX(actuality_id) {
    this.actualityService.delete(actuality_id).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
