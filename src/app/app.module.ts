import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent , UploadInterceptor} from './app.component';
import {HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { MainSidebarComponent } from './main/main-sidebar/main-sidebar.component';
import { ControlSidebarComponent } from './main/control-sidebar/control-sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IconsModule } from '@progress/kendo-angular-icons';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ProfileComponent } from './pages/profile/profile.component';
import { BoardAdminComponent } from './pages/board-admin/board-admin.component';
import { BoardModeratorComponent } from './pages/board-moderator/board-moderator.component';
import { BoardUserComponent } from './pages/board-user/board-user.component';
import { Home2Component } from './pages/home2/home2.component';
import { HttpClientModule } from '@angular/common/http';
import { TesttComponent } from './testt/testt.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {MatSortModule} from '@angular/material/sort';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
import {MatButtonModule} from '@angular/material/button';
import { NameComponentComponent } from './name-component/name-component.component';
import { OpenGroceryListButtonComponent } from './open-grocery-list-button/open-grocery-list-button.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { ClockComponent } from './clock/clock.component';
import { RubriqueComponent } from './rubrique/rubrique.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MaterialsComponent } from './materials/materials.component';
import { FolderContentComponent } from './folder-content/folder-content.component';
import { EventComponent } from './event/event.component';
import { StrategyComponent } from './strategy/strategy.component';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { WebinarsComponent } from './webinars/webinars.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FolderComponent } from './folder/folder.component';
import {MatRadioModule} from '@angular/material/radio';
import { DialogPermission2Component } from './dialog-permission2/dialog-permission2.component';
import { NewfolderDialogComponent } from './newfolder-dialog/newfolder-dialog.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { UploadModule } from '@progress/kendo-angular-upload';
import { PdfComponent } from './pdf/pdf.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { DevComponent } from './dev/dev.component';
import { DirectoryComponent } from './directory/directory.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { DevDetailComponent } from './dev-detail/dev-detail.component';
import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';
import { ListViewModule } from '@progress/kendo-angular-listview';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NewSolutionComponent } from './new-solution/new-solution.component';
import { NewToolComponent } from './new-tool/new-tool.component';
import { UpdateToolComponent } from './update-tool/update-tool.component';
import { UpdateSolutionComponent } from './update-solution/update-solution.component';
import { EditLinkComponent } from './edit-link/edit-link.component';
import { MarketingComponent } from './marketing/marketing.component';
import { MarketingDetailComponent } from './marketing-detail/marketing-detail.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { NewMarketingEventComponent } from './new-marketing-event/new-marketing-event.component';
import { PagerModule } from '@progress/kendo-angular-pager';
import { NewActualityComponent } from './new-actuality/new-actuality.component';
import 'hammerjs';
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';

import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import {NgxChildProcessModule} from 'ngx-childprocess';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { MsalGuard, MsalInterceptor, MsalBroadcastService, MsalInterceptorConfiguration, MsalModule, MsalService, MSAL_GUARD_CONFIG, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG, MsalGuardConfiguration,MsalRedirectComponent } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication, InteractionType, BrowserCacheLocation } from '@azure/msal-browser';
import { Login2Component } from './login2/login2.component';
import { ChartsModule } from '@progress/kendo-angular-charts';

import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { CalendarComponent } from './calendar/calendar.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { IdeaComponent } from './idea/idea.component';
import { TreeListModule } from '@progress/kendo-angular-treelist';
import { CardComponent } from './card/card.component';
import { UpdateOnlineComponent } from './update-online/update-online.component';
import { UpdatePresenceComponent } from './update-presence/update-presence.component';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { FlashComponent } from './flash/flash.component';
import { SalesComponent } from './sales/sales.component';
import { SalesDetailComponent } from './sales-detail/sales-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { Profile2Component } from './profile2/profile2.component';
import { ManagedServicesComponent } from './managed-services/managed-services.component';
import { ManagedServicesDetailComponent } from './managed-services-detail/managed-services-detail.component';
import { ProfessionalServicesComponent } from './professional-services/professional-services.component';
import { FinanceComponent } from './finance/finance.component';
import { FinanceDetailComponent } from './finance-detail/finance-detail.component';
import { RhComponent } from './rh/rh.component';
import { RhDetailComponent } from './rh-detail/rh-detail.component';
import { ProfessionalServicesDetailComponent } from './professional-services-detail/professional-services-detail.component';
import { UserUpdate2Component } from './user-update2/user-update2.component';
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { WorkAnniversariesComponent } from './work-anniversaries/work-anniversaries.component';
import { UpdateImageComponent } from './update-image/update-image.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { ShoppingCartComponent } from './shoppingCart/shoppingCart.component';
import { NewItemShopComponent } from './new-item-shop/new-item-shop.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { UpdateItemsComponent } from './update-items/update-items.component';

 // must go before plugins


const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: 'ed629398-679d-40e9-a2d7-ecb88f204976',
      authority: 'https://login.microsoftonline.com/organizations',
      redirectUri: 'http://localhost:4400'
    },
    /*http://localhost:8080/Angular9AdminLte3/Angular9AdminLte3/ */
 
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE,
      }
  });
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return { interactionType: InteractionType.Redirect };
}
export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set('https://graph.microsoft.com/v1.0/me', ['Mail.Send','user.read','User.ReadBasic.All']);
  protectedResourceMap.set('https://graph.microsoft.com/v1.0/users',['User.ReadBasic.All']);

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap
  };
}


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MainSidebarComponent,
    ControlSidebarComponent,
    HomeComponent,
    ContactsComponent,
    PageNotFoundComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    Home2Component,
    TesttComponent,
    NameComponentComponent,
    OpenGroceryListButtonComponent,
    GroceryListComponent,
    ClockComponent,
    RubriqueComponent,
    MaterialsComponent,
    FolderContentComponent,
    EventComponent,
    StrategyComponent,
    DialogEditComponent,
    WebinarsComponent,
    FolderComponent,
    DialogPermission2Component,
    NewfolderDialogComponent,
    PdfComponent,
    DevComponent,
    DirectoryComponent,
    DevDetailComponent,
    UploadDialogComponent,
    NewSolutionComponent,
    NewToolComponent,
    UpdateToolComponent,
    UpdateSolutionComponent,
    EditLinkComponent,
 
    MarketingComponent,
    MarketingDetailComponent,
    NewCategoryComponent,
    NewMarketingEventComponent,
    NewActualityComponent,
    Login2Component,
    UserDialogComponent,
    CalendarComponent,
    IdeaComponent,
    CardComponent,
    UpdateOnlineComponent,
    UpdatePresenceComponent,
    EventDetailComponent,
    FlashComponent,
    SalesComponent,
    SalesDetailComponent,
    UserEditComponent,
    Profile2Component,
    ManagedServicesComponent,
    ManagedServicesDetailComponent,
    ProfessionalServicesComponent,
    FinanceComponent,
    FinanceDetailComponent,
    RhComponent,
    RhDetailComponent,
    ProfessionalServicesDetailComponent,
    UserUpdate2Component,
    BirthdaysComponent,
    WorkAnniversariesComponent,
    UpdateImageComponent,
    RecruitmentComponent,
    ShoppingCartComponent,
    NewItemShopComponent,
    ItemDetailsComponent,
    UpdateItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LabelModule,
    LayoutModule,
    IconsModule,
    HttpClientModule,
    ButtonsModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    MatMomentDateModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTreeModule,
    MatSortModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatDialogModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatMenuModule,
    DropDownsModule,
    ButtonModule,
    UploadModule,
    NgxExtendedPdfViewerModule,
    TreeViewModule,
    ListViewModule,
    MatTooltipModule,
    PagerModule,
    ScrollViewModule,
    NgxChildProcessModule,
    FullCalendarModule,
  


    DateInputsModule,
    NgbPaginationModule,
     NgbAlertModule,
     MsalModule,
    NgbModule,
    ChartsModule,
    GridModule,
    PDFExportModule,
    PDFModule,
    ExcelModule,

    ExcelExportModule,

    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),

    TreeListModule,

    IndicatorsModule // register FullCalendar with you app

    
    
   
 
  ],
 
    bootstrap: [AppComponent,MsalRedirectComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: UploadInterceptor,
            multi: true
        },
        
        {
          provide: HTTP_INTERCEPTORS,
          useClass: MsalInterceptor,
          multi: true
        },
        {
          provide: MSAL_INSTANCE,
          useFactory: MSALInstanceFactory
        },
        {
          provide: MSAL_GUARD_CONFIG,
          useFactory: MSALGuardConfigFactory
        },
        {
          provide: MSAL_INTERCEPTOR_CONFIG,
          useFactory: MSALInterceptorConfigFactory
        },
    
   
        MsalService,
        MsalGuard,
        MsalBroadcastService,
        

    ],
 
})
export class AppModule { }
