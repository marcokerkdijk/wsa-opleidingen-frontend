import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Opdracht } from '../Objecten/opdracht';

@Injectable({
  providedIn: 'root'
})
export class OpdrachtService {
  private api: string = environment.apiUrl

  constructor(private http: HttpClient) { }

  geefAlleOpdrachtenVanTraject(traject_id: Number): Observable<Opdracht[]> {
    return this.http.get<Opdracht[]>(`${this.api}/geefAlleOpdrachtenVanTraject/` + traject_id);
  }

  maakOpdrachtAan(traject_id: Number, opdracht: Opdracht): Observable<Opdracht> {
    return this.http.post<Opdracht>(`${this.api}/maakOpdracht/` + traject_id, opdracht);
  }
}
