import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TbReportDinamicy } from './../modal/tbreportdinamicy';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TbreportdinamicyService {

  constructor(private http: HttpClient) { }

  getUserAll(): Observable<TbReportDinamicy[]> {
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY2MjI3MzA5OX0.X0H6iVsQYcBOiOURrMuonHZga6Ezo04qkB7VhI2v4ea3cdkGu8bNFWtTg0sJqxNdwKyjHv-2v8WIDA0ANK17FA'
      })
    };
    return  this.http.get<TbReportDinamicy[]>(`${environment.api}/getallreportdinamicy   `, httpOptions);


  }
}
