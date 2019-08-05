import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectieFase } from '../selectieFase';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SelectieFaseService {
  private api: string = environment.apiUrl


  constructor(private http:HttpClient) { }

  haalSelectieFaseOpId(id: number): Observable<any> {
    return this.http.get<SelectieFase>(`${this.api}/GeefSelectieFaseOpId/` + id);
  }

  voegSelectieFaseToe(selectieFase: SelectieFase): Observable<any> {
     return this.http.post<SelectieFase>(`${this.api}/MaakSelectieFase`, selectieFase);
  }

  GeefAlleSelectieFasen(): Observable<SelectieFase[]> {
    return this.http.get<SelectieFase[]>(`${this.api}/GeefAlleSelectieFasen`);
  }

  GeefTrajectFasen(traject_id): Observable<SelectieFase[]> {
    return this.http.get<SelectieFase[]>(`${this.api}/GeefAlleTrajectFasen/` + traject_id);
  }

}
