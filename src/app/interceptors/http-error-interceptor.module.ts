import { ErrorException } from './../model/api-error';
import { Injectable, NgModule } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AlertService, AlertTypes } from '../services/alert.service';

@Injectable()
export class HttpRequestErrorInterceptor implements HttpInterceptor {
  constructor(private alertService: AlertService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        this.hanldeErrorAPI(err);
        return throwError(err);
      })
    );
  }

  private hanldeErrorAPI(error: HttpErrorResponse) {
    const err: ErrorException = error.error;

    switch (error.status) {
      case 0:
        this.alertService.showToastr(
          AlertTypes.DANGER,
          'ERROR',
          'Não foi possível conectar ao servidor'
        );
        break;
      case 503:
        this.alertService.showToastr(
          AlertTypes.DANGER,
          'ERROR',
          err.message ? err.message : error.message
        );
        break;
      default:
        this.alertService.showToastr(
          AlertTypes.WARNING,
          error.message,
          'ERROR'
        );
        break;
    }
  }
}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestErrorInterceptor,
      multi: true,
    },
    // { provide: ErrorHandler, useClass: RollbarErrorHandler },
    // { provide: RollbarService, useFactory: rollbarFactory }
  ],
})
export class HttpErrorInterceptor {}
