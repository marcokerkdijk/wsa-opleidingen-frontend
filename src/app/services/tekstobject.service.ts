import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TekstObject } from '../Objecten/tekst-object';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TekstobjectService {
  private api: string = (environment.apiUrl + "/tekstobject")

  constructor(private http: HttpClient) { }

  GeefAlleTekstObjecten(): Observable<TekstObject[]> {
    return this.http.get<TekstObject[]>(`${this.api}/geefAlleTekstObjecten`)
  }

  haalTekstObjectOpId(tekstObject_id: number): Observable<any> {
    return this.http.get<TekstObject>(`${this.api}/HaalTekstObjectOpId/` + tekstObject_id);
  }

  wijzigTekstObject(tekstObject: TekstObject): Observable<any> {
    return this.http.put(`${this.api}/WijzigTekstObject`, tekstObject);
  }
}