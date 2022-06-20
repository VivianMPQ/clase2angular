import {Injectable} from '@angular/core';
import {User} from "../model/user";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  //poner la ruta de la api
  basePath: string = 'http://localhost:3000/api/v1/auth';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  currentUser!: User;

  constructor(private http: HttpClient) {
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error has occurred: ${error.error.message} `);

    } else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  //tipear bien el signin
  signIn(user: User) {
    return this.http
      .post(`${this.basePath}/signIn`, user)
      .pipe(
        retry(2),
        catchError(this.handleError));


  }
}
