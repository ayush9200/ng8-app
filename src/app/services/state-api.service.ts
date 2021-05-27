import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { State } from "../modal/state";
import { AppSetting } from '../app-setting';

@Injectable({
  providedIn: 'root'
})
export class StateApiService {

  constructor(private httpClient: HttpClient) { }
  baseUrl : string = AppSetting.API_URL;
  apiKey : string = AppSetting.API_STATE;
  state : State[];
  

  getAllStates() : Observable<any>{
    return this.httpClient.get(this.baseUrl+ this.apiKey).
    pipe(
      map((data: State[]) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
   ); 
  }
}
