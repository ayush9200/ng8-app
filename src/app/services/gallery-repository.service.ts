import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { AppSetting } from '../app-setting';


@Injectable({
  providedIn: 'root'
})
export class GalleryRepositoryService {

  baseUrl : string = AppSetting.API_URL;
  apiKey : string = AppSetting.API_GALLERY;

  constructor(private httpClient : HttpClient) { }

  getAllImages() : Observable<any>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(AppSetting.API_USERNAME + ':' + AppSetting.API_PASS),
    'Access-Control-Allow-Origin':'*' });
    return this.httpClient.get<any>(this.baseUrl+this.apiKey, {headers});
  }
}
