import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Organisation } from "../modal/organisation";
import { AppSetting } from '../app-setting';

@Injectable({
  providedIn: 'root'
})
export class OrganisationApiService {

  constructor(private httpClient: HttpClient) { }
  baseUrl : string = AppSetting.API_URL;
  apiKey : string = AppSetting.API_ORG;
 
  getAllOrganisation() : Observable<any>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(AppSetting.API_USERNAME + ':' + AppSetting.API_PASS),
    'Access-Control-Allow-Origin':'*' });
    return this.httpClient.get(this.baseUrl+ this.apiKey, {headers}).
    pipe(
      map((data: Organisation[]) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
   ); 
  }

  saveOrganisation(organisation : Organisation) : Observable<any>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(AppSetting.API_USERNAME + ':' + AppSetting.API_PASS),
    'Access-Control-Allow-Origin':'*' });
    return this.httpClient.post(this.baseUrl+this.apiKey, organisation, {headers});
  }
}
