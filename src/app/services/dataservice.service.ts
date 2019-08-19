import { Injectable } from '@angular/core';
import { Traject } from '../Objecten/traject';

@Injectable({
  providedIn: 'root'
})

export class DataserviceService {
  public traject: Traject;
  public traject_id:number;

  constructor() { }

  public setTraject(traject: Traject): void{
    this.traject = traject;
  }
  
  public getTraject(): Traject{
    return this.traject;
  }

  public setTraject_id(traject_id): void{
    this.traject_id=traject_id;
  }

  public getTraject_id(){
    return this.traject_id;
  }
}
