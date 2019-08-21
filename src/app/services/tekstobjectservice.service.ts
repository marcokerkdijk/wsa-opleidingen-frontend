import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TekstObject } from '../Objecten/tekst-object';


@Injectable({
  providedIn: 'root'
})
export class TekstobjectserviceService {
  private api: string = environment.apiUrl
  tekstObject: TekstObject = new TekstObject();

  constructor(private http: HttpClient) { }

  geefTekstobjectPerId(id:number): Observable<any> {
    this.tekstObject.id = 1;
    return this.http.get<TekstObject>(`${this.api}/geefTekstObjectOpId/` + this.tekstObject.id);
  }
}
