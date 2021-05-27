import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaytmApiService {

  constructor(private httpClient: HttpClient) { }
  baseUrl : string = "http://localhost:8088/";
  apiKey : string = "event/"

  getAllEvents() : Observable<any>{
    return this.httpClient.get(this.baseUrl+ this.apiKey);
    
  }
}
