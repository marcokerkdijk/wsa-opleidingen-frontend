import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Uitwerking } from '../Objecten/uitwerking';
import { UitwerkingDTO } from '../Objecten/uitwerking-dto';

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

  geefAssessmentUitwerkingenVanTraject(traject_id: number): Observable<UitwerkingDTO[]> {
    return this.http.get<UitwerkingDTO[]>(`${this.api}/geefAssessmentUitwerkingenVanTraject/` + traject_id);
  }

  haalUitwerkingOp(uitwerking_id: number): Observable<Uitwerking> {
    return this.http.get<Uitwerking>(`${this.api}/geefUitwerking/` + uitwerking_id);
  }

  geefAssessmentUitwerkingenVanStudent(gebruiker_id: number): Observable<UitwerkingDTO[]> {
    return this.http.get<UitwerkingDTO[]>(`${this.api}/geefAssessmentUitwerkingenVanStudent/` + gebruiker_id);
  }

  maakAssessmentResultaat(gebruiker_id: number, opdracht_id: number, uitwerkingDTO: UitwerkingDTO): Observable<Uitwerking> {
    return this.http.post<Uitwerking>(`${this.api}/maakAssessmentResultaat/` + gebruiker_id + '/' + opdracht_id, uitwerkingDTO);
  }

  wijzigAssessmentResultaat(gebruiker_id: number, uitwerkingDTO: UitwerkingDTO) {
    return this.http.put<UitwerkingDTO>(`${this.api}/wijzigAssessmentUitwerking/` + gebruiker_id, uitwerkingDTO);
  }

  geefAssessmentResultaat(uitwerking_id: number): Observable<UitwerkingDTO> {
    return this.http.get<UitwerkingDTO>(`${this.api}/geefAssessmentUitwerking/` + uitwerking_id);
  }

  verwijderAssessmentResultaat(uitwerking_id: number): Observable<any> {
    return this.http.delete(`${this.api}/verwijderAssessmentResultaat/` + uitwerking_id);
  }
}