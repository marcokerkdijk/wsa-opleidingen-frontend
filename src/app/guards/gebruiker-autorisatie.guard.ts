import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
import { AutenticatieService } from '../services/autenticatie.service';
import { GebruikersRol } from '../model/GebruikersRol';

@Injectable({
  providedIn: 'root'
})
export class GebruikerAutorisatieGuard implements CanActivate {
  
  constructor(private router: Router, private tokenService: TokenService, private autenticatieService: AutenticatieService) {

  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.autenticatieService.isGeautoriseerd(GebruikersRol.ADMIN)  || 
        this.autenticatieService.isGeautoriseerd(GebruikersRol.DOCENT) ||
        this.autenticatieService.isGeautoriseerd(GebruikersRol.STUDENT) ||
        this.autenticatieService.isGeautoriseerd(GebruikersRol.RECRUITER)) {

      return true;
    }

    const url: string = state.url;
    this.autenticatieService.redirectUrl = url;
    return this.router.createUrlTree(['/home']);

  }
  
}
