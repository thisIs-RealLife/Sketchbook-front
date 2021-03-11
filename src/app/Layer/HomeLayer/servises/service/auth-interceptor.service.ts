import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {audit} from 'rxjs/operators';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(this.auth.getToken());
    if (this.auth.isAuthenticate()) {
      const request = req.clone({
        setHeaders: {
          Authorization: this.auth.getToken()
        }
      });
      return next.handle(req);
    }
  }
}
