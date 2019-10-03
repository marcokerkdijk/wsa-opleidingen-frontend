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

  haalTekstObjectOpId(tekstObject_id: number): Observable<any> {
    return this.http.get<TekstObject>(`${this.api}/HaalTekstObjectOpId/` + tekstObject_id);
  }
}