import { Injectable } from '@angular/core';
import { Traject } from '../Objecten/traject';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
}
