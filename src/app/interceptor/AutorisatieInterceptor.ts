import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {TokenService} from "../services/token.service";
import { catchError } from 'rxjs/operators';
import { AutenticatieService } from '../services/autenticatie.service';

const AUTORISATIE_TOKEN_HEADER = 'Authorization';

@Injectable()
export class AutorisatieInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService, private authenticatieService: AutenticatieService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authReq = req;
    const token = this.tokenService.getBearerToken();

    if (token != null) {
      authReq = req.clone({headers: req.headers.set(AUTORISATIE_TOKEN_HEADER, 'Bearer ' + token)});
    }

    return next.handle(authReq)
  }

}
