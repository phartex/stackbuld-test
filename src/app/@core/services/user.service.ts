import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Iusers } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'http://localhost:3000/users';
  headers = new HttpHeaders().set("Content-Type", "application/json").set("Accept", "application/json");
  httpOptions = {
    headers: this.headers
  }

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<Iusers[]>(this.url);
  }

  deleteUser(id: number): Observable<Iusers> {
    const url = `${this.url}/${id}`;
    return this.http.delete<Iusers>(url, this.httpOptions);
  }

  getUpdateUser(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.get<any>(url, this.httpOptions);
  }

  updateUser(user: any): Observable<Iusers> {
    const url = `${this.url}/${user.id}`;
    return this.http.put<Iusers>(url,user, this.httpOptions)
      .pipe(
        map(() => user)
      );
  }
  addUser(user: any): Observable<Iusers> {
    const url = `${this.url}`;
    return this.http.post<Iusers>(url,user, this.httpOptions)
      .pipe(
        map(() => user)
      );
  }

  inputValidation(event: KeyboardEvent): void {

    const notAcceptedInputs: string[] = [

      "*",

      "/",

      "=",

      ">",

      "<",

      "?",

      ":",

      "|",

      "^",

      "&",

      "$",

      "#",

      "!",

      "}",

      "{",

      "]",

      "[",

      ";",

      "+",

      ")",

      "(",

      "~",

      "%",

      "`",

      "'",

      ",",

      '"',

      "@",

    ];

    if (notAcceptedInputs.includes(event.key)) {

      event.preventDefault();

    }

  }

}
