import {
  Component,
  OnInit,
  Inject,
  OnDestroy,
  Injectable,
} from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpProgressEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable, of, concat } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  MsalService,
  MsalBroadcastService,
  MSAL_GUARD_CONFIG,
  MsalGuardConfiguration,
} from '@azure/msal-angular';
import { EventMessage, EventType, InteractionType } from '@azure/msal-browser';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import {ProfileService} from "./_services/profile.service";
import { InteractionStatus,RedirectRequest } from '@azure/msal-browser';
import {UserinfoService} from "./_services/userinfo.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NEWACCESS ';
  isIframe = false;
  loggedIn = false;
  private readonly _destroying$ = new Subject<void>();
  loginDisplay = false;

  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private router: Router , 
    public userinfoService:UserinfoService,
    private profileService:ProfileService
    
  ) {
    localStorage.setItem('loggedIn', '0');
    console.log(localStorage.getItem('loggedIn'))
  }

  ngOnInit(): void {
 
   /* this.profileService.getInformation();
    */
    this.msalBroadcastService.msalSubject$
    .pipe(
      filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
    )
    .subscribe((result: EventMessage) => {
      console.log(result);
    });

  
    this.isIframe = window !== window.parent && !window.opener;
    this.msalBroadcastService.inProgress$
    .pipe(
      filter((status: InteractionStatus) => status === InteractionStatus.None),
      takeUntil(this._destroying$)
    )
    .subscribe(() => {
      this.checkAccount()
      this.setLoginDisplay();
    })
  
 /* this.checkAccount();

    this.msalBroadcastService.msalSubject$
      .pipe(
        filter(
          (msg: EventMessage) =>
            msg.eventType === EventType.LOGIN_SUCCESS ||
            msg.eventType === EventType.ACQUIRE_TOKEN_SUCCESS
        ),
        takeUntil(this._destroying$)
      )
      .subscribe((result) => {
     
      });*/
  }
  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

  checkAccount() {
    this.loggedIn = this.authService.instance.getAllAccounts().length > 0;
    if (this.loggedIn == true) {
      localStorage.setItem('loggedIn', '1');
      this.getProfile();
    } else {
      localStorage.setItem('loggedIn', '0');
      console.log("not ok");
    }
  }
  
  getProfile() {
    this.profileService.getProfile().subscribe(
        response => {
          
      
          this.userinfoService.getUser(response.mail).subscribe((data) => {
            console.log(data);
            localStorage.setItem('user', data);
            // window.sessionStorage.setItem("user",data);
            //window.sessionStorage.setItem("id",data.id);
            
           
          });
         
        },
        error => {
          console.log(error);
        }
    
      
      );
  }
  login() {
    if (this.msalGuardConfig.interactionType === InteractionType.Redirect) {
      this.authService.logoutRedirect().subscribe(() => {
        this.router.navigate(['']);
        console.log("ok")
      
      });
    } else {
      this.router.navigate(['login']);

      //    this.authService.loginRedirect();
    }
  }
 
 
  logout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}

@Injectable()
export class UploadInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url === 'saveUrl') {
      const events: Observable<HttpEvent<any>>[] = [0, 30, 60, 100].map((x) => of(<HttpProgressEvent>{
        type: HttpEventType.UploadProgress,
        loaded: x,
        total: 100
      }).pipe(delay(1000)));

      const success = of(new HttpResponse({ status: 200 })).pipe(delay(1000));
      events.push(success);

      return concat(...events);
    }

    if (req.url === 'removeUrl') {
        return of(new HttpResponse({ status: 200 }));
    }

    return next.handle(req);
  }}