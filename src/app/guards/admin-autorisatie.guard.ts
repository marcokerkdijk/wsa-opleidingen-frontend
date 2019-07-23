import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenService} from "../services/token.service";
import {GebruikersRol} from "../model/GebruikersRol";
import {AutenticatieService} from "../services/autenticatie.service";

@Injectable({
  providedIn: 'root'
})
export class AdminAutorisatieGuard implements CanActivate {

  constructor(private router: Router,
              private tokenService: TokenService, private autenticatieService: AutenticatieService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.autenticatieService.isGeautoriseerd(GebruikersRol.ADMIN)) {

      return true;
    }

    const url: string = state.url;
    this.autenticatieService.redirectUrl = url;
    return this.router.createUrlTree(['/home']);

  }

}
