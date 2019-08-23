import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Opdracht } from '../Objecten/opdracht';

@Injectable({
  providedIn: 'root'
})
export class OpdrachtenserviceService {
  private api: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  haalZichtbareOpdrachtenOp(): Observable<Opdracht[]>{
    return this.http.get<Opdracht[]>(`${this.api}/haalZichtbareOpdrachtenOp`)
  }

  haalOpdrachtOpId(id: number): Observable<any> {
    return this.http.get<Opdracht>(`${this.api}/haalOpdrachtOpId/` + id)
  }
}
