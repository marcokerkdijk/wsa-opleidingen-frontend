import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OpleidingsFase } from '../Objecten/opleidingsfase';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OpleidingsFaseService {
  private api: string = environment.apiUrl

  constructor(private http:HttpClient) { }

  haalOpleidingsFaseOpId(id: number): Observable<any> {
    return this.http.get<OpleidingsFase>(`${this.api}/GeefOpleidingsFaseOpId/` + id);
  }
  
  voegOpleidingsFaseToe(selectieFase: OpleidingsFase, traject_id): Observable<any> {
     return this.http.post<OpleidingsFase>(`${this.api}/MaakOpleidingsFase/`+traject_id, selectieFase );
  }

  GeefOpleidingsFasenPerTraject(traject_id): Observable<OpleidingsFase[]> {
    return this.http.get<OpleidingsFase[]>(`${this.api}/GeefOpleidingsFasenPerTraject/` + traject_id);
  }

  wijzigOpleidingsFase(gewijzigdeFase, opleidingsFase_id): Observable<any> {
    return this.http.put<OpleidingsFase>(`${this.api}/WijzigOpleidingsFase/` +opleidingsFase_id, gewijzigdeFase);
  }
}
