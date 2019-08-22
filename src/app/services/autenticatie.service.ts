import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {GebruikersRol} from "../model/GebruikersRol";
import {isNotNullOrUndefined} from "codelyzer/util/isNotNullOrUndefined";
import {TokenService} from "./token.service";
import {isNullOrUndefined} from "util";

@Injectable({
  providedIn: 'root'
})
export class AutenticatieService {

  private apiUrl: string;
  private wsaClientAuthorization: string;
  private jwtToken: JwtToken;
  public redirectUrl: string;

  constructor(private http: HttpClient, private tokenService: TokenService, private jwtHelperService: JwtHelperService) {

    this.apiUrl = environment.apiUrl;
    this.wsaClientAuthorization = ''.concat(environment.wsaClientId, ':', environment.wsaClientSecret);
  }

  public login(emailadres: string, wachtwoord: string): Observable<JwtResponse> {
    const body = new HttpParams()
      .set('grant_type', 'password')
      .set('username', emailadres)
      .set('password', wachtwoord);

    const httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Basic ' + btoa(this.wsaClientAuthorization));

    return this.http.post<JwtResponse>(this.apiUrl + '/oauth/token',
      body.toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(this.wsaClientAuthorization)
        }
      }
    );
  }

  public isGeautoriseerd(gebruikersRol: GebruikersRol): boolean {

    if (!this.tokenService.isIngelogd()) {
      return false;
    }

    if (isNullOrUndefined(this.jwtToken)) {
      this.jwtToken = this.jwtHelperService.decodeToken(this.tokenService.getBearerToken());
    }

    return !isNullOrUndefined(this.jwtToken)
      && !isNullOrUndefined(this.jwtToken.authorities)
      && !isNullOrUndefined(this.jwtToken.authorities.find(value => value === gebruikersRol.toString()));
  }

  public routePerRol(): string {
    if (isNullOrUndefined(this.jwtToken)) {
      this.jwtToken = this.jwtHelperService.decodeToken(this.tokenService.getBearerToken());
    }

    let rol = this.jwtToken.authorities[0];

    switch(rol) {
      case 'ADMIN': {
        return '/admin';
      }
      case 'DOCENT': {
        return '/docent';
      }
      case 'STUDENT': {
        return '/student';
      }
      case 'RECRUITER': {
        return '/recruiter';
      }
    }
  }

  public krijgRol(): string {
    if (isNotNullOrUndefined(this.jwtToken)) {
      this.jwtToken = this.jwtHelperService.decodeToken(this.tokenService.getBearerToken());
    }

    let rol = this.jwtToken.authorities[0];

    switch(rol) {
      case 'ADMIN': {
        return "admin";
      }
      case 'DOCENT': {
        return "docent";
      }
      case 'STUDENT': {
        return "student";
      }
      case 'RECRUITER': {
        return "recruiter";
      }
    }
  }

  public haalTokenOp(): JwtToken {
    return this.jwtToken;
  }

  public logout(): string {
    this.jwtToken = null;
    this.tokenService.resetToken();
    return '/home';
  }
}

export interface JwtResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  jti: string;
  scope: string;
}

export interface JwtToken {
  authorities: string[];
  client_id: string;
  exp: number;
  jti: string;
  scope: string[];
  user_name: string;
  voornaam: string;
  tussenvoegsel: string;
  achternaam: string;
  displaynaam: string;
  gebruiker_id: number;
}