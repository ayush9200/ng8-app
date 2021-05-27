import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AppSetting } from '../app-setting';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  baseUrl : string = AppSetting.API_URL;
  apiKey : string = AppSetting.API_IMAGE;

  constructor(private httpClient: HttpClient) {}

  uploadFile(fileToUpload: File, fileUploadDomain : string): Observable<any> {
    debugger;
    const formData: FormData = new FormData();
    formData.append('image',  fileToUpload, fileToUpload.name);
    formData.set('domain',  fileUploadDomain);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(AppSetting.API_USERNAME + ':' + AppSetting.API_PASS),
    'Access-Control-Allow-Origin':'*' });
    return this.httpClient.post(this.baseUrl+this.apiKey, formData,{headers});
  }
}
