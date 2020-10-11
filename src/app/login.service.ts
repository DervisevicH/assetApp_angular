import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUsername: BehaviorSubject<string>;
  public username: Observable<string>;
  constructor(private httpClient: HttpClient, private router: Router) {
    this.currentUsername = new BehaviorSubject<string>(localStorage.getItem('username'));
    this.username = this.currentUsername.asObservable();
   }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
  // Verify user credentials on server to get token
  loginForm(username, password): Observable<any> {
    let user = {
      "username": username,
      "password": password
    };
    const apiUrl = 'https://localhost:44352/api/administrator/login';
    return this.httpClient.post(apiUrl, user, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
  // After login save token and other values(if any) in localStorage
  setUser(response) { 
    localStorage.setItem('username', response.username);
    localStorage.setItem('userId', response.userId);
    localStorage.setItem('access_token', response.token);
    this.router.navigate(['/home']);
  }
// Checking if token is set
isLoggedIn() {
  return localStorage.getItem('access_token') != null;
}
getUserId() {
  const userId = localStorage.getItem('userId');
  return userId;
}
// After clearing localStorage redirect to login screen
logout() {
  localStorage.clear();
  this.router.navigate(['/login']);
}
}
