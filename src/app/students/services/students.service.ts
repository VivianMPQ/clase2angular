import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Students} from "../model/students";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  //el endpoint de students
  //ahora que tenemos un link nuevo (firebase)
  //la db no envia la info porque sigue con la antigua
 // basePath = "http://localhost:3000/api/v1/students"; //manejo de rutas
  //llevando la db al link firebase
  basePath = "https://learningcenter-39587.web.app/students";

  //http
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) {
  }

  //error
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error has occurred: ${error.error.message} `);

    } else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  //set all students
  getAll(): Observable<Students> {
    return this.http.get<Students>(this.basePath, this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }

  //eliminar estudiantes
  delete(id: any) {
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  //actualizar lista de estudiantes
  update(id: any, item: any): Observable<Students> {
    return this.http.put<Students>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));

  }

  //crear un nuevo estudiante /recibe nuevos datos
  create(item:any): Observable<Students>{
    //usamos CRUD
    return this.http.post<Students>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }


}
