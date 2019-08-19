import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectieFase } from '../Objecten/selectieFase';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SelectieFaseService {
  private api: string = environment.apiUrl


  constructor(private http:HttpClient) { }

  haalSelectieFaseOpId(id: number): Observable<any> {
    console.log(id);
    return this.http.get<SelectieFase>(`${this.api}/GeefSelectieFaseOpId/` + id);
  }

  voegSelectieFaseToe(selectieFase: SelectieFase, traject_id): Observable<any> {
     return this.http.post<SelectieFase>(`${this.api}/MaakSelectieFase/`+traject_id, selectieFase );
  }

  GeefSelectieFasenPerTraject(traject_id): Observable<SelectieFase[]> {
    return this.http.get<SelectieFase[]>(`${this.api}/GeefSelectieFasenPerTraject/` + traject_id);
  }

  wijzigSelectieFase(gewijzigdeFase, selectieFase_id): Observable<any> {
    return this.http.put<SelectieFase>(`${this.api}/WijzigSelectieFase/` +selectieFase_id, gewijzigdeFase);
  }

}
