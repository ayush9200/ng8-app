import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { EventsComponent } from './events/events.component';
import { EventApiService } from "./event-api.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgsRevealModule} from 'ngx-scrollreveal';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurSupportersComponent } from './our-supporters/our-supporters.component';
import { DonationComponent } from './donation/donation.component';
import { HelpBoxComponent } from './help-box/help-box.component';
import { AdminHelpdeskComponent } from './admin-helpdesk/admin-helpdesk.component';
import { MailServiceApiService } from "./mail-service-api.service";
import { CityApiService } from "./services/city-api.service";
import { StateApiService } from "./services/state-api.service";
import { MemberApiService } from "./services/member-api.service";
import { OrganisationApiService } from "./services/organisation-api.service";
import { FileUploadService } from "./services/file-upload.service";
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { LogInApiService } from "./services/log-in-api.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactListComponent,
    ContactCreateComponent,
    HomeComponent,
    GalleryComponent,
    EventsComponent,
    AboutUsComponent,
    OurSupportersComponent,
    HelpBoxComponent,
    AdminHelpdeskComponent,
    DonationComponent,
    LoginPanelComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    NgsRevealModule,
    ReactiveFormsModule
  ],

  providers: [EventApiService, MailServiceApiService, StateApiService, CityApiService, 
    MemberApiService, OrganisationApiService, FileUploadService, LogInApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
