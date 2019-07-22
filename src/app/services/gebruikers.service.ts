import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Gebruiker } from '../gebruiker';

@Injectable({
  providedIn: 'root'
})
export class GebruikersService {
  private api: string = environment.apiUrl

  constructor(private http : HttpClient) { }

  geefActieveGebruikers(): Observable<Gebruiker[]> {
        
    return this.http.get<Gebruiker[]>(`${this.api}/haalGebruikersOp`)
}
}
