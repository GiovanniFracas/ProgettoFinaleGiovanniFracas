import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }


  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let authReq: HttpRequest<any> = req.clone({
      headers: req.headers
        .set(
          'Authorization',
          'Bearer ' +
          'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0ODAzMDcwMCwiZXhwIjoxNjQ4ODk0NzAwfQ.aNuK8egaPuuLi24S9dVBuEs_ZlubClofeWSERGUA8C5_wHbufWix9NdLCYXRJBqHmqaW3cqt7C09_81v26yTHg'        )
        .set('X-TENANT-ID', 'fe_0721b'),
    });
    return next.handle(authReq)
  }
}
