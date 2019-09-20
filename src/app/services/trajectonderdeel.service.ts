import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TrajectOnderdeel } from '../Objecten/traject-onderdeel';

@Injectable({
  providedIn: 'root'
})
export class TrajectonderdeelService {
  private api: string = (environment.apiUrl+ "/trajectonderdeel");

  constructor(private http: HttpClient) { }

  geefAlleTrajectonderdelen(): Observable<TrajectOnderdeel[]> {
    return this.http.get<TrajectOnderdeel[]>(`${this.api}/geefAlleTrajectonderdelen`);
  }
}
