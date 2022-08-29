import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from '../modal/user';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


    getUserAll(): Observable<User[]> {
      const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY2MjI3MzA5OX0.X0H6iVsQYcBOiOURrMuonHZga6Ezo04qkB7VhI2v4ea3cdkGu8bNFWtTg0sJqxNdwKyjHv-2v8WIDA0ANK17FA'
        })
      };
      return  this.http.get<User[]>(`${environment.api}/usersall   `, httpOptions);

  }

  /*

    getBooksWithObservable(): Observable {
        return this.http.get(this.url).pipe(
            map(this.extractData),
            catchError(this.handleErrorObservable)
        )
    }
    getBooksWithPromise(): Promise {
        return this.http.get(this.url).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    }
    private extractData(res: any) {
        let body = res;
        return body;
    }
    private handleErrorObservable(error: any) {
        console.error(error.message || error);
        return throwError(error);
    }
    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }

    para chamar e usar o serviço

       observableBooks: Observable<Book[]>;
   books: Book[] = [];
   errorMessage = '';
   constructor(private bookService: BookService) {
      this.observableBooks = this.bookService.getBooksWithObservable();
      this.observableBooks.subscribe(
         books => this.books = books,
         error => this.errorMessage = error);
   }





  */

}
