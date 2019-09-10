import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WachtwoordVergetenService {
  private api: string = (environment.apiUrl + "/email");

  constructor(private http: HttpClient) { }

  wachtwoordVergeten(email: string): Observable<any> {
    return this.http.post(`${this.api}`, email);
  }
  
}