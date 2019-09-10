import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Gebruiker } from '../Objecten/gebruiker';
import { WijzigWachtwoordDTO } from '../Objecten/wijzig-wachtwoord-dto';

@Injectable({
  providedIn: 'root'
})
export class GebruikersService {
  private api: string = (environment.apiUrl + "/gebruiker")

  constructor(private http: HttpClient) { }

  geefActieveGebruikers(): Observable<Gebruiker[]> {
    return this.http.get<Gebruiker[]>(`${this.api}/haalGebruikersOp`);
  }

  wijzigGebruiker(gebruiker, id: number): Observable<any> {
    return this.http.put(`${this.api}/wijzigGebruiker/` + gebruiker.id, gebruiker);
  }

  vraagGebruikerOpId(id: number): Observable<Gebruiker> {
    return this.http.get<Gebruiker>(`${this.api}/getGebruikerId/` + id);
  }
  
  gebruikerToevoegen(gebruiker) {
    return this.http.post(`${this.api}/maakGebruikerAan/`, gebruiker);
  }

  gebruikerOpvragenRol(rolGebruiker): Observable<any> {
    return this.http.get<Gebruiker[]>(`${this.api}/haalGebruikerOpRol/` + rolGebruiker);
  }
  
  /**
   * Methode voor het ophalen van gekoppelde studenten en ongekoppelde
   * gebruikers met de rol STUDENT
   * @param traject_id  id van het traject waar de gekoppelde studenten
   * van worden opgehaald
   */  
  geefStudentenVanTrajectEnOngekoppelde(traject_id: number): Observable<Gebruiker[]> {
    return this.http.get<Gebruiker[]>(`${this.api}/studentenVanTrajectEnOngekoppeldeStudenten/` + traject_id);
  }

  wijzigWachtwoord(id: number, wachtwoordDTO: WijzigWachtwoordDTO): Observable<any> {	
    return this.http.put(`${this.api}/wijzigWachtwoord/` + id, wachtwoordDTO);	
  }
    
  /**
   * Haal een lijst op van alle studenten die bij het opgegeven traject horen
   * @param id het ID van het traject waar de studenten voor worden opgevraagd.
   */
  haalAlleStudentenVanTraject(id: number): Observable<Gebruiker[]> {
    return this.http.get<Gebruiker[]>(`${this.api}/haalStudentenOpMetTrajectId/` + id);
  }

  haalDocentOpMetTraject(traject_id): Observable<any> {
    console.log(traject_id);
    return this.http.get<Gebruiker>(`${this.api}/haalDocentOpMetTraject/` + traject_id);
  }

}