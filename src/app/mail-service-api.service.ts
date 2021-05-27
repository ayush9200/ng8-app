import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { InboxService } from './modal/inbox-service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AppSetting } from './app-setting';

@Injectable({
  providedIn: 'root'
})
export class MailServiceApiService {

  constructor(private httpClient : HttpClient) { }
    baseUrl : string = AppSetting.API_URL;
    apiKey : string = AppSetting.API_MAIL;


  pushEmail(inboxBody : InboxService) : Observable<InboxService>{
    return this.httpClient.post<InboxService>(this.baseUrl+ this.apiKey, inboxBody, {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        Authorization: 'Basic ' + btoa(AppSetting.API_USERNAME + ':' + AppSetting.API_PASS),
        'Access-Control-Allow-Origin':'*' 
      })
    });
    
  }
}
