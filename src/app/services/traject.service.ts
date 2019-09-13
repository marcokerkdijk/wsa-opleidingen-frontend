import { Injectable } from '@angular/core';
import { Traject } from '../Objecten/traject';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DTOGebruikerID } from '../Objecten/gebruikerDTO';
import { TrajectOnderdeel } from '../Objecten/traject-onderdeel';
import { TrajectDTO } from '../Objecten/traject-dto';

@Injectable({
  providedIn: 'root'
})

export class TrajectService {
  private api: string = (environment.apiUrl+ "/traject")

  constructor(private http: HttpClient) {
  }

  GeefAlleTrajecten(): Observable<Traject[]> {
    return this.http.get<Traject[]>(`${this.api}/GeefAlleTrajecten`)
  }

  GeefZichtbareTrajecten(): Observable<Traject[]> {
    return this.http.get<Traject[]>(`${this.api}/GeefZichtbareTrajecten`)
  }

  maakTrajectAan(trajectDto: TrajectDTO): Observable<any> {
    return this.http.post<TrajectDTO>(`${this.api}/maakTrajectAan`, trajectDto);
  }

  wijzigTraject(trajectDto: TrajectDTO): Observable<any> {
    return this.http.put(`${this.api}/WijzigTrajectMetDTO`, trajectDto);
  }

  haalTrajectOpId(traject_id: number): Observable<any> {
    return this.http.get<Traject>(`${this.api}/HaalTrajectOpId/` + traject_id);
  }

  geefTrajectDTOMetTrajectId(traject_id: number): Observable<TrajectDTO> {
    return this.http.get<TrajectDTO>(`${this.api}/geefTrajectDTO/` + traject_id);
  }

  geefAlleTrajectenVanGebruiker(gebruiker_id: number): Observable<Traject[]> {
    return this.http.get<Traject[]>(`${this.api}/geefAlleTrajectenVanGebruiker/` + gebruiker_id);
  }

  koppelTrajectAanGebruiker(lijstGebruikers:DTOGebruikerID[], traject_id:number){
    return this.http.put<DTOGebruikerID>(`${this.api}/koppelTrajectAanGebruiker/` + traject_id, lijstGebruikers);
  }

  geefAlleTrajectonderdelenVanTraject(traject_id: number): Observable<TrajectOnderdeel[]> {
    return this.http.get<TrajectOnderdeel[]>(`${this.api}/geefTrajectOnderdelenVanTraject/` + traject_id);
  }

  geefTrajectBijGebruiker(gebruiker_id: number): Observable<Traject> {
    return this.http.get<Traject>(`${this.api}/geefTrajectVanGebruiker/` + gebruiker_id);
  }
}