import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { City } from '../modal/city';
import { AppSetting } from '../app-setting';

@Injectable({
  providedIn: 'root'
})
export class CityApiService {

  constructor(private httpClient: HttpClient) { }
  baseUrl : string = AppSetting.API_URL;
  apiKey : string = AppSetting.API_CITY;
  city : City[];
  

  getAllCity() : Observable<any>{
    return this.httpClient.get(this.baseUrl+ this.apiKey).
    pipe(
      map((data: City[]) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
   ); 
  }
}
