import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Event } from "./modal/event-modal";
import { AppSetting } from "./app-setting";




@Injectable({
  providedIn: 'root'
})
export class EventApiService {

  constructor(private httpClient: HttpClient) { }
  baseUrl : string = AppSetting.API_URL;
  apiKey : string = AppSetting.API_EVENT

  getAllEvents() : Observable<any>{
    // return this.httpClient.get(this.baseUrl+ this.apiKey);
    debugger;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(AppSetting.API_USERNAME + ':' + AppSetting.API_PASS),
    'Access-Control-Allow-Origin':'*' });
    return this.httpClient.get<any>(this.baseUrl + this.apiKey, {headers});
  }

  getEventById(id: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(AppSetting.API_USERNAME + ':' + AppSetting.API_PASS),
    'Access-Control-Allow-Origin':'*' });
    return this.httpClient.get<any>(this.baseUrl + this.apiKey + id, {headers});
  }

  saveEvent(eventForm : Event): Observable<any>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(AppSetting.API_USERNAME + ':' + AppSetting.API_PASS),
    'Access-Control-Allow-Origin':'*' });
   return this.httpClient.post(this.baseUrl + this.apiKey, eventForm, {headers});
  }
}
