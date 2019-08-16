import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Gebruiker } from '../Objecten/gebruiker';
import { GebruikersRol } from '../model/GebruikersRol';
import { DTOGebruikerID } from '../Objecten/gebruikerDTO';

@Injectable({
  providedIn: 'root'
})
export class GebruikersService {
  private api: string = environment.apiUrl

  constructor(private http : HttpClient) { }

  geefActieveGebruikers(): Observable<Gebruiker[]> {
        
    return this.http.get<Gebruiker[]>(`${this.api}/haalGebruikersOp`);
  }

  wijzigGebruiker(gebruiker,id:number): Observable<any> {
   return this.http.put(`${this.api}/wijzigGebruiker/`+gebruiker.id, gebruiker);
  }

  vraagGebruikerOpId(id:number) : Observable<any> {
    return this.http.get<Gebruiker>(`${this.api}/getGebruikerId/`+id);
  }
  gebruikerToevoegen(gebruiker) {
    return this.http.post(`${this.api}/maakGebruikerAan/`, gebruiker);
  }

  gebruikerOpvragenRol(rolGebruiker): Observable<any> {
    return this.http.get<Gebruiker>(`${this.api}/haalGebruikerOpRol/` +rolGebruiker);
  }

  haalDocentOpMetTraject(traject_id): Observable<any> {
    console.log(traject_id);
    return this.http.get<Gebruiker>(`${this.api}/haalDocentOpMetTraject/` +traject_id);
  }
  
  geefAlleGebruikersOpRolVanTraject(id: number, rol:GebruikersRol): Observable<any> {
    return this.http.get<Gebruiker[]>(`${this.api}/haalGebruikersOpRolMetTrajectId/` + id + "/" +rol);
  }
  
    geefAlleStudentenVanTraject(id: number): Observable<Gebruiker[]> {
    return this.http.get<Gebruiker[]>(`${this.api}/haalStudentenOpMetTrajectId/` + id);
  }
}
