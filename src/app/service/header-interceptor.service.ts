import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if(localStorage.getItem('token') != null) {
      
      const token = 'Bearer ' + localStorage.getItem('token');

      // req.clone() => resgata a requisicao original
      const tokenRequest = req.clone({
        headers: req.headers.set('Authorization', token)
      });
      return next.handle(tokenRequest);
    } else {
        // Se nao tiver token, retorna a requisicao original
        return next.handle(req);
    }
  }
}
