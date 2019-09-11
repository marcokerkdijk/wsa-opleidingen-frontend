import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Uitwerking } from '../Objecten/uitwerking';

@Injectable({
  providedIn: 'root'
})
export class UitwerkingService {
  private api: string = (environment.apiUrl+ "/uitwerking")

  constructor(private http: HttpClient) { }

  geefAlleUitwerkingen() {
    return this.http.get<Uitwerking[]>(`${this.api}/geefAlleUitwerkingen`)
  }

  maakUitwerking(gebruiker_id: number, opdracht_id: number, uitwerking: Uitwerking): Observable<Uitwerking> {
    return this.http.post<Uitwerking>(`${this.api}/maakUitwerking/` + gebruiker_id + '/' + opdracht_id, uitwerking);
  }

  wijzigUitwerking(gebruiker_id: number, uitwerking: Uitwerking) {
    return this.http.put<Uitwerking>(`${this.api}/WijzigUitwerking/` + gebruiker_id, uitwerking);
  }
}