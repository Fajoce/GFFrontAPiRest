import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader/public-api';

@Injectable()
export class InterceptorRequestInterceptor implements HttpInterceptor {

  constructor(private ngUiLoaderService: NgxUiLoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   this.ngUiLoaderService.start();
    return next.handle(request);
  }
}
