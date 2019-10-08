import { Injectable } from '@angular/core';
import { Traject } from '../Objecten/traject';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TekstObject } from '../Objecten/tekst-object';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  private api: string = (environment.apiUrl + "/home")

  constructor(private http: HttpClient) {
  }

  GeefZichtbareTrajectenHome(): Observable<Traject[]> {
    return this.http.get<Traject[]>(`${this.api}`)
  }

  haalTekstObjectOpIdHome(tekstObject_id: number): Observable<TekstObject> {
    return this.http.get<TekstObject>(`${this.api}/HaalTekstObjectOpId/` + tekstObject_id)
  }
}