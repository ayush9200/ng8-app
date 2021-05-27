import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSetting } from '../app-setting';

@Injectable({
  providedIn: 'root'
})
export class LogInApiService {

  
  baseUrl : string = AppSetting.API_URL;
  apiKey : string = AppSetting.API_LOGIN;

  constructor(private httpClient : HttpClient) { }

  public login(username : string, password : string){
      //const headers = new HttpHeaders({Authorization : 'Basic ' +btoa(username +":"+ password)})
      //return this.httpClient.get("http://localhost:8088/admin", { headers,responseType:'text' as 'json'});

      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(AppSetting.API_USERNAME + ':' + AppSetting.API_PASS),
    'Access-Control-Allow-Origin':'*' });
    return this.httpClient.get(this.baseUrl+this.apiKey, {headers,responseType:'text' as 'json'});

  }
}
