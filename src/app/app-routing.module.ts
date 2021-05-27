import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component'
import { GalleryComponent } from './gallery/gallery.component';
import {AboutUsComponent } from './about-us/about-us.component';
import { AdminHelpdeskComponent } from './admin-helpdesk/admin-helpdesk.component';
import { DonationComponent } from './donation/donation.component';
import { HelpBoxComponent } from './help-box/help-box.component';
import { OurSupportersComponent } from './our-supporters/our-supporters.component';
import { LoginPanelComponent } from "./login-panel/login-panel.component";

//import { LeftHandComponent } from './left_hand/left_hand.component';
//import { RightHandComponent } from './right-hand/right-hand.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "contact-create", component: ContactCreateComponent},
  {path: "contact-list", component: ContactListComponent},  
  {path: "gallery", component: GalleryComponent},
  {path: "event", component: EventsComponent},
  {path: "about-us", component: AboutUsComponent},
  {path: "admin-helpdesk", component: AdminHelpdeskComponent},
  {path: "donation", component: DonationComponent},
  {path: "help-box", component: HelpBoxComponent},
  {path: "our-supporters", component: OurSupportersComponent},
  {path: "loginPanel", component: LoginPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
