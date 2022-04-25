import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthGuard } from './_helpers/auth.guard';
import {NameComponentComponent } from "./../app/name-component/name-component.component"
import {GroceryListComponent } from "../app/grocery-list/grocery-list.component"
import {EventComponent} from "../app/event/event.component";
import {MaterialsComponent} from "../app/materials/materials.component"
import {StrategyComponent} from "../app/strategy/strategy.component";
import {FolderComponent} from "../app/folder/folder.component";
import {PdfComponent} from "./pdf/pdf.component";
import {DevComponent} from "./dev/dev.component";
import {DirectoryComponent} from "../app/directory/directory.component";
import {ProfileComponent} from "../app/pages/profile/profile.component";
import {DevDetailComponent} from "../app/dev-detail/dev-detail.component"
import { from } from 'rxjs';
import {MarketingComponent} from "../app/marketing/marketing.component"
import { MsalGuard } from '@azure/msal-angular';
import {Login2Component} from "../app/login2/login2.component";
import {CalendarComponent} from "../app/calendar/calendar.component";
import {IdeaComponent} from "../app/idea/idea.component";
import {EventDetailComponent} from "../app/event-detail/event-detail.component";
import {FlashComponent} from "../app/flash/flash.component"
import {SalesComponent} from "../app/sales/sales.component"
import {Profile2Component} from "../app/profile2/profile2.component"
import {RhComponent} from "../app/rh/rh.component"
import {ProfessionalServicesComponent} from "../app/professional-services/professional-services.component"
import {FinanceComponent} from "../app/finance/finance.component"
import {ManagedServicesComponent} from "../app/managed-services/managed-services.component"
import { ShoppingCartComponent } from './shoppingCart/shoppingCart.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

const routes: Routes = [
  
  
 

  
  {
    path: '', component: MainComponent,
    canActivate :[MsalGuard] ,
    children: [{
      path: '', component: HomeComponent,
      
    },
    {
      path: 'configuration', component: ProfileComponent,
      
    },
    
    {
      path: 'profile', component: Profile2Component,
      
    },
    
    {
      path: 'flash', component: FlashComponent,
      
    },
    
    {
      path: 'idea', component: IdeaComponent,
      
    },
    
    {
      path: 'calendar', component: CalendarComponent,
      
    },
    
    
    {
      path: 'sales', component: SalesComponent,
      
    },
    {
      path: 'ps', component:    ProfessionalServicesComponent,
      
    },
    
    {
      path: 'ms', component:    ManagedServicesComponent,
      
    },
     
    {
      path: 'rh', component: RhComponent,
      
    },
    {
      path: 'finance', component: FinanceComponent,
      
    },
    { path: 'events/:id/:id2', component: EventDetailComponent },

    { path: 'items/:id/:id2', component: ItemDetailsComponent },
    {
   
       
       
     
      path:'marketing' , component:MarketingComponent,
    
        children: [{
        
        
          path: 'a1', component: EventComponent,
         
        },
       
        
        
        {
          path: 'directory', component: DirectoryComponent,
         
        },
        {
          path: 'file', component: NameComponentComponent,
         
        },]
      },
    
    {
   
       
       
     
      path:'dev' , component:DevComponent,
    
        children: [{
        
        
          path: 'a1', component: EventComponent,
         
        },
       
        
        
        {
          path: 'directory', component: DirectoryComponent,
         
        },
        {
          path: 'file', component: NameComponentComponent,
         
        },]
      },
      {
        path: 'strategy', component: StrategyComponent
      },
   
    {
      path:'events' , component:EventComponent,
    },
    {
      path:'Shop' , component:ShoppingCartComponent,
    },
     {
      path: 'marketing1', component: ContactsComponent,
      children: [{
        path: 'materials', component: MaterialsComponent,
        children: [{
          path: 'backgrounds', component: NameComponentComponent,
         
        },
        {
          path: 'a1', component: EventComponent,
         
        },
        {
          path: 'folder/:id', component: FolderComponent,
         
        },
        
        {
          path: 'directory', component: DirectoryComponent,
         
        },
        {
          path: 'file', component: NameComponentComponent,
         
        },]
      },
      {
        path: 'strategy', component: StrategyComponent
      },
       ]
      
    } ,
    {
      path: '**', component: PageNotFoundComponent
    }]
  }
];
const isIframe = window !== window.parent && !window.opener;
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
