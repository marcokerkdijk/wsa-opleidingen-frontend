import {Injectable} from '@angular/core';
import {Traject} from '../Objecten/traject';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { DTOGebruikerID } from '../Objecten/gebruikerDTO';
import { TrajectOnderdeel } from '../Objecten/traject-onderdeel';
import { TrajectDTO } from '../Objecten/traject-dto';

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

  maakTrajectAan(trajectDto: TrajectDTO): Observable<any> {
    return this.http.post<TrajectDTO>(`${this.api}/maakTrajectAan`, trajectDto);
  }

  // Oude methode, kan als het goed is weg als bovenstaande methode naar behoren werkt
  MaakTraject(traject: Traject): Observable<any> {
    return this.http.post<Traject>(`${this.api}/MaakTraject`, traject);
  }

  wijzigTraject(trajectDto: TrajectDTO): Observable<any> {
    return this.http.put(`${this.api}/WijzigTrajectMetDTO`, trajectDto);
  }

  // Oude methode, kan als het goed is weg als bovenstaande methode naar behoren werkt
  WijzigTraject(traject,id:number): Observable<any> {
    return this.http.put(`${this.api}/WijzigTraject/`+traject.id, traject);
  }

  GeefZichtbareTrajectenHome(): Observable<Traject[]> {
    return this.http.get<Traject[]>(`${this.api}/home`)
  }

  haalTrajectOpId(id: number): Observable<any> {
    return this.http.get<Traject>(`${this.api}/HaalTrajectOpId/` + id);
  }

  geefTrajectDTOMetTrajectId(traject_id: number): Observable<TrajectDTO> {
    return this.http.get<TrajectDTO>(`${this.api}/geefTrajectDTO/` + traject_id);
  }

  haalTrajectenOpVanGebruiker(gebruiker_id: number): Observable<Traject[]> {
    return this.http.get<Traject[]>(`${this.api}/geefTrajectenMetGebruikerId/` + gebruiker_id);
  }

  koppelTrajectAanGebruiker(lijstGebruikers:DTOGebruikerID[], trajectId:number){
    return this.http.put<DTOGebruikerID>(`${this.api}/voegGebruikersOfVerwijderVanTraject/` +trajectId, lijstGebruikers);
  }

  geefAlleTrajectonderdelen(traject_id: number): Observable<TrajectOnderdeel[]> {
    return this.http.get<TrajectOnderdeel[]>(`${this.api}/geefTrajectOnderdelenVanTraject/` + traject_id);
  }
}
