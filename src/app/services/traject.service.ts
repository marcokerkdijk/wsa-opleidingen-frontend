import { Injectable } from '@angular/core';
import { Traject } from '../traject';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrajectService {
  private api: string = environment.apiUrl

  constructor(private http: HttpClient) { }

  GeefAlleTrajecten(): Observable<Traject[]> {
    return this.http.get<Traject[]>(`${this.api}/GeefAlleTrajecten`)
  }

  GeefZichtbareTrajecten(): Observable<Traject[]> {
    // return of(zichtbareTrajecten);

    return this.http.get<Traject[]>(`${this.api}/GeefZichtbareTrajecten`)

  }

  MaakTraject(traject: Traject): Observable<any> {
    return this.http.post<Traject>(`${this.api}/MaakTraject`, traject);
  }

  WijzigTraject(traject: Traject): Observable<any> {
    return this.http.put<Traject>(`${this.api}/WijzigTraject/1`, traject);
  }

  GeefZichtbareTrajectenHome(): Observable<Traject[]> {
    return this.http.get<Traject[]>(`${this.api}/home`)

  }


}
