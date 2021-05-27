import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Member } from "../modal/member";
import { AppSetting } from '../app-setting';

@Injectable({
  providedIn: 'root'
})
export class MemberApiService {

  constructor(private httpClient: HttpClient) { }
  baseUrl : string = AppSetting.API_URL;
  apiKey : string = AppSetting.API_MEMBER;
  state : Member[];

  getAllMembers() : Observable<any>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(AppSetting.API_USERNAME + ':' + AppSetting.API_PASS),
    'Access-Control-Allow-Origin':'*' });
    return this.httpClient.get(this.baseUrl+ this.apiKey,{headers}).
    pipe(
      map((data: Member[]) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
   ); 
  }

  saveMember(memberBody : Member) : Observable<any>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(AppSetting.API_USERNAME + ':' + AppSetting.API_PASS),
    'Access-Control-Allow-Origin':'*' });
    return this.httpClient.post(this.baseUrl+this.apiKey, memberBody, {headers});
  }
}
