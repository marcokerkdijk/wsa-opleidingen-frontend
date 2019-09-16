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

  geefAantekeningenVanTraject(traject_id: number): Observable<Aantekening[]> {
    return this.http.get<Aantekening[]>(`${this.api}/AantekeningenVanTraject/` + traject_id);
  }

  aantekeningOpslaan(aantekening: Aantekening, traject_id: number): Observable<any> {
    return this.http.post<Aantekening>(`${this.api}/AantekeningAanmaken/` + traject_id, aantekening);
  }

  getNotitiesVanTrajectOpGebruikerId(gebruiker_id: number): Observable<Aantekening[]> {
    return this.http.get<Aantekening[]>(`${this.api}/aantekeningenVanTrajectOpGebruikerId/` + gebruiker_id);
  }

  getAantekeningOpId(id: number): Observable<Aantekening>{
    return this.http.get<Aantekening>(`${this.api}/getAantekeningOpId/` + id);
  }

  aantekeningWijzigen(aantekening: Aantekening): Observable<any> {
    return this.http.put<Aantekening>(`${this.api}/AantekeningWijzigen`, aantekening);
  }

  verwijderAantekening(aantekening: Aantekening): Observable<any> {
    return this.http.put<Aantekening>(`${this.api}/AantekeningVerwijderen`, aantekening);
  }
}
