import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Key } from 'protractor';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export class Helpful {
  Key: string;
  Value: string;
}

@Injectable({
  providedIn: 'root'
})
export class HelpfulService {

  Helpful: any = [];
  // tslint:disable-next-line: quotemark
  private readonly  endPoint = "../../assets/config/config.json";

  constructor(private httpClient: HttpClient) {
  }

  // tslint:disable-next-line: typedef
  public getConfig() {
    return this.httpClient.get<Helpful[]>(this.endPoint);
  }

}
