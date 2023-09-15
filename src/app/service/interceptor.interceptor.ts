import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (sessionStorage.getItem("jwtToken") !=null ){
      let cnx = 'Bearer ' + sessionStorage.getItem("jwtToken");
      request = request.clone({
        setHeaders: {
          Authorization: cnx
        }
      });

    };
    return next.handle(request);
  }
}
