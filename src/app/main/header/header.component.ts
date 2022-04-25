import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../_services/token-storage.service";
import {
  MsalService,
  MsalBroadcastService,
  MSAL_GUARD_CONFIG,
  MsalGuardConfiguration,
} from '@azure/msal-angular';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  heminImage:any = "../";
  
  constructor(private tokenStorageService: TokenStorageService ,private authService: MsalService,) { }

  logout() {
    this.authService.logout();
    window.location.reload();
  }
  ngOnInit(): void {
  }

}
