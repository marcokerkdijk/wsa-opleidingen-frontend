import { Injectable } from '@angular/core';
import { Traject } from '../traject';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { zichtbareTrajecten } from 'src/mockTrajecten';

@Injectable({
  providedIn: 'root'
})
export class TrajectService {
  private api:string = environment.apiUrl

  constructor(private http:HttpClient) { }

  GeefZichtbareTrajecten(): Observable<Traject[]> {
        return of(zichtbareTrajecten);
    }

    //   return this.http.get<Traject[]>(`${this.api}/GeefZichtbareTrajecten`)
  //  }

}