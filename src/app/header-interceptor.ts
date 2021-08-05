import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if(localStorage.getItem('token') != null) {
      
      const token = 'Bearer ' + localStorage.getItem('token');

      // req.clone() => resgata a requisicao original
      const tokenRequest = req.clone({
        headers: req.headers.set('Authorization', token)
      });

      // Retorna o token na resposta e verifica se tem erro
      return next.handle(tokenRequest).pipe(tap((event: HttpEvent<any>) => {
        if(event instanceof HttpResponse && (event.status == 200 || event.status == 201)) {
          console.info('Sucesso na operação!');
        }
      }) , catchError(this.processaErro));
    } else {
        // Se nao tiver token, retorna a requisicao original
        return next.handle(req);
    }
  }

  processaErro(error: HttpErrorResponse): Observable<HttpEvent<any>> {
    let errorMessage: string = 'Erro desconhecido!';

    if(error.error instanceof ErrorEvent) {
      errorMessage = 'Error: ' + error.error.error;
    } else {
      errorMessage = 'Código: ' + error.error.code + '\nMensagem: ' + error.error.error;
    }
    console.error(error.error);
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
