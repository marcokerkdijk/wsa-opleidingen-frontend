import { Injectable } from '@angular/core';
import { Aantekening } from '../Objecten/aantekening';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AantekeningserviceService {
  private api: string = (environment.apiUrl + "/aantekening")

  constructor(private http: HttpClient) { }

  getAlleAantekeningen(): Observable<Aantekening[]>{
    return this.http.get<Aantekening[]>(`${this.api}/getAlleAantekeningen`);
  }
}
