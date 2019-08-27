import { Injectable } from '@angular/core';
import { Traject } from '../Objecten/traject';
import { Opdracht } from '../Objecten/opdracht';

@Injectable({
  providedIn: 'root'
})

export class DataserviceService {
  public traject: Traject;
  public traject_id:number;
  private opdracht: Opdracht;

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

  public setOpdracht(opdracht: Opdracht): void {
    this.opdracht = opdracht;
  }

  public getOpdracht(): Opdracht {
    return this.opdracht;
  }
}
