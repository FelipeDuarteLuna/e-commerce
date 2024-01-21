import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {
  constructor(private matSnackBar: MatSnackBar) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // eslint-disable-next-line no-console
    console.log('Request:', request.url, request.method, request.body);

    const clonedRequest = request.clone({
      setHeaders: {
        'x-access-token': 'MEU_TOKEN',
      },
    });

    return next.handle(clonedRequest).pipe(
      catchError((error) => {
        // EXECUTA ALGUMA AÇÃO
        this.matSnackBar.open('Ops, houve um erro', 'Fechar', {
          duration: 5000,
        });
        return throwError(() => error); // PASSA O ERRO PRA FRENTE
      })
    );
  }
}
