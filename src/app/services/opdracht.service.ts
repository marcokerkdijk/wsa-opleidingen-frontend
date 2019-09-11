import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Opdracht } from '../Objecten/opdracht';

@Injectable({
  providedIn: 'root'
})
export class OpdrachtService {
  private api: string = environment.apiUrl + "/opdracht"

  constructor(private http: HttpClient) { }

  geefAlleOpdrachtenVanTraject(traject_id: Number): Observable<Opdracht[]> {
    return this.http.get<Opdracht[]>(`${this.api}/geefAlleOpdrachtenVanTraject/` + traject_id);
  }

  maakOpdrachtAan(opdracht: Opdracht): Observable<Opdracht> {
    return this.http.post<Opdracht>(`${this.api}/maakOpdracht`, opdracht);
  }

  wijzigOpdracht(opdracht: Opdracht): Observable<Opdracht> {
    return this.http.put<Opdracht>(`${this.api}/wijzigOpdracht`, opdracht);
  }

  verwijderOpdracht(opdracht: Opdracht): Observable<any> {
    return this.http.put(`${this.api}/verwijderOpdracht`, opdracht);
  }

  haalZichtbareOpdrachtenOp(): Observable<Opdracht[]>{
    return this.http.get<Opdracht[]>(`${this.api}/haalZichtbareOpdrachtenOp`);
  }

  haalOpdrachtOpId(id: number): Observable<any> {
    return this.http.get<Opdracht>(`${this.api}/haalOpdrachtOpId/` + id);
  }

  haalAlleAssessments(){
    return this.http.get<Opdracht[]>(`${this.api}/haalAlleAssessmentsOp`);
  }

}