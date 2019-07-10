import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AutenticatieService {

  private apiUrl: string;
  private wsaClientAuthorization: string;

  constructor(private http: HttpClient, private jwtHelperService: JwtHelperService) {

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
}

export interface JwtResponse {
  accessToken: string;
  type: string;
  username: string;
  authorities: string[];
}
