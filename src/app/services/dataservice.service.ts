import { Injectable } from '@angular/core';
import { Traject } from '../Objecten/traject';
import { Opdracht } from '../Objecten/opdracht';
import { Gebruiker } from '../Objecten/gebruiker';
import { Uitwerking } from '../Objecten/uitwerking';
import { Aantekening } from '../Objecten/aantekening';

@Injectable({
  providedIn: 'root'
})

export class DataserviceService {
  public traject: Traject;
  public traject_id:number;
  private opdracht: Opdracht;
  private gebruiker: Gebruiker;
  private uitwerking: Uitwerking;
  private aantekening: Aantekening;

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

  public setGebruiker(gebruiker: Gebruiker): void {
    this.gebruiker = gebruiker;
  }

  public getGebruiker(): Gebruiker {
    return this.gebruiker;
  }

  public setUitwerking(uitwerking: Uitwerking): void {
    this.uitwerking = uitwerking;
  }

  public getUitwerking(): Uitwerking {
    return this.uitwerking;
  }

  public setAantekening(aantekening: Aantekening): void {
    this.aantekening = aantekening;
  }

  public getAantekening(): Aantekening {
    return this.aantekening;
  }
}
