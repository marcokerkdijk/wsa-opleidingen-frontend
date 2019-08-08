import { Injectable } from '@angular/core';
import { Traject } from '../Objecten/traject';

@Injectable({
  providedIn: 'root'
})

export class DataserviceService {
  public traject: Traject;

  constructor() { }

  public setTraject(traject: Traject): void{
    this.traject = traject;
  }
  
  public getTraject(): Traject{
    return this.traject;
  }
}
