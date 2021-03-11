import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserLoginInterface} from '../../model/interface/UserLoginInterface';
import {UserRegisterInterface} from '../../model/interface/UserRegisterInterface';
import {FormBuilder, FormGroup} from '@angular/forms';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private Authenticate: boolean;
  private token: string;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
  }

  login(user: UserLoginInterface): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('http://localhost:8080/login', user).pipe(
      tap(
        ({token}) => {
          localStorage.setItem('auth-token', token);
          this.setToken(token);
        }
      )
    );
  }

  registration(user: UserRegisterInterface): Observable<any> {
    return this.http.post('http://localhost:8080/registration', user);
  }

  public getAuth(): boolean {
    return this.Authenticate;
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  logout(): void {
    this.setToken(null);
    localStorage.clear();
  }

  isAuthenticate(): boolean {
    return true;
    return this.token !== null && this.token !== undefined;
  }
}
