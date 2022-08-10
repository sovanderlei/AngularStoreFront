import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  login(user: any) {
    return new Promise(async (resolve) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      try {
          const result = await this.http.post<any>(`${environment.api}/login   `, user, httpOptions).toPromise();
          if (result.status === 200){
            // console.log(result.token);
            window.localStorage.setItem('"userid', result.id);
            window.localStorage.setItem('"useridcompany', result.idcompany);
            window.localStorage.setItem('"username', result.name);
            window.localStorage.setItem('"useremail', result.email);
            window.localStorage.setItem('token', result.token);
            resolve(true);
          }else{
            resolve(false);
          }

    } catch (error) {
          resolve(false);
    }

    });
  }

  // tslint:disable-next-line: typedef
  createAccount(account: any) {
    return new Promise((resolve) => {
      resolve(true);
    });
  }
}
