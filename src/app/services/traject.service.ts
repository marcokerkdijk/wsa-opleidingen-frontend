import {Injectable} from '@angular/core';
import {Traject} from '../Objecten/traject';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { DTOGebruikerID } from '../Objecten/gebruikerDTO';

@Injectable({
  providedIn: 'root'
})

export class TrajectService {
  private api: string = environment.apiUrl

  constructor(private http: HttpClient) {
  }

  GeefAlleTrajecten(): Observable<Traject[]> {
    return this.http.get<Traject[]>(`${this.api}/GeefAlleTrajecten`)
  }

  GeefZichtbareTrajecten(): Observable<Traject[]> {
    return this.http.get<Traject[]>(`${this.api}/GeefZichtbareTrajecten`)
  }

  MaakTraject(traject: Traject): Observable<any> {
    return this.http.post<Traject>(`${this.api}/MaakTraject`, traject);
  }

  WijzigTraject(traject,id:number): Observable<any> {
    return this.http.put(`${this.api}/WijzigTraject/`+traject.id, traject);
  }

  GeefZichtbareTrajectenHome(): Observable<Traject[]> {
    return this.http.get<Traject[]>(`${this.api}/home`)
  }

  haalTrajectOpId(id: number): Observable<any> {
    return this.http.get<Traject>(`${this.api}/GeefTrajectOpId/` + id);
  }

  geefTrajectOpId(id: number): Observable<any> {
    return this.http.get<Traject>(`${this.api}/haalTrajectOpId/` + id);
  }

  haalTrajectenOpVanGebruiker(gebruiker_id: number): Observable<Traject[]> {
    return this.http.get<Traject[]>(`${this.api}/geefTrajectenMetGebruikerId/` + gebruiker_id);
  }

  koppelTrajectAanGebruiker(lijstGebruikers:DTOGebruikerID[], trajectId:number){
    console.log("Hij komt echt in de service terecht.")
    return this.http.put<DTOGebruikerID>(`${this.api}/voegGebruikersOfVerwijderVanTraject/` +trajectId, lijstGebruikers);
  }
}
