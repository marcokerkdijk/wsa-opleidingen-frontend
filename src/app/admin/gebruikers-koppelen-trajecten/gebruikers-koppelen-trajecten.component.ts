import { Component, OnInit } from '@angular/core';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { ModalService } from 'src/app/services/modal.service';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { GebruikersRol } from 'src/app/model/GebruikersRol';
import { DTOGebruikerID } from 'src/app/Objecten/gebruikerDTO';
import { AdminBeheerTrajectfasenComponent } from '../admin-beheer-trajectfasen/admin-beheer-trajectfasen.component';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { TrajectService } from 'src/app/services/traject.service';
import { Traject } from 'src/app/Objecten/traject';
import { GebruikerKoppelTabelComponent } from './gebruiker-koppel-tabel/gebruiker-koppel-tabel.component';

@Component({
  selector: 'wsa-gebruikers-koppelen-trajecten',
  templateUrl: './gebruikers-koppelen-trajecten.component.html',
  styleUrls: ['./gebruikers-koppelen-trajecten.component.scss']
})
export class GebruikersKoppelenTrajectenComponent implements OnInit {
  gebruikers:Gebruiker[] = new Array;
  gebruikersGekoppeld:Gebruiker[] = new Array;
  gebruikerTrajecten:Traject[];
  lijstGebruikersKoppelen:DTOGebruikerID[] = new Array;
  gekoppeldeGebruiker:DTOGebruikerID = new DTOGebruikerID;
  trajectId:number;
  gekoppeld:boolean;
  trajectGetoond:Traject = new Traject;
 


  constructor(private modalService:ModalService, private gebruikerService: GebruikersService,
    private dataService:DataserviceService, private trajectService:TrajectService) { }

  ngOnInit() {
    this.trajectId = this.dataService.getTraject_id();
  }
  
  openModal(id: string, rol:GebruikersRol) {
    console.log(this.trajectId);
    this.haalGebruikerOp(rol);
    this.modalService.open(id);

  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  haalLijstGekoppeldeGebruikers(rol:GebruikersRol){
    this.gebruikerService.geefAlleGebruikersOpRolVanTraject(this.trajectId, rol)
    .subscribe(gekoppeldeGebruikers => this.lijstGebruikersKoppelen = gekoppeldeGebruikers);
    console.log(this.lijstGebruikersKoppelen, 'zoveel staat er nu in')
  }

  maakGekoppeldBoolean(gebruiker:Gebruiker){
   var i:number;
   if(gebruiker.trajecten.length >=1){
   for (i = 0; i <= gebruiker.trajecten.length; i++){
     this.trajectGetoond.id = gebruiker.trajecten[i].id;
     if(this.trajectGetoond.id == this.trajectId){
      this.gekoppeld=true;
     } 
  }
 }
  else {
    this.gekoppeld= false;
  }
    }

  haalGebruikerOp(rol:GebruikersRol){
    this.gebruikerService.gebruikerOpvragenRol(rol)
    .subscribe(opgehaaldeGebruikers => this.gebruikers = opgehaaldeGebruikers);
    console.log(rol);

  }

  koppelOfOntkoppelGebruikersAanTraject(modalID) {
    this.trajectService.koppelTrajectAanGebruiker(this.lijstGebruikersKoppelen, this.trajectId).subscribe();
    this.closeModal(modalID);
  }

    maakLijstGebruikerDTO(gebruikerID){
      let DTOgebruikerID:DTOGebruikerID = new DTOGebruikerID;
      DTOgebruikerID.id = gebruikerID;
      console.log(gebruikerID);
        this.lijstGebruikersKoppelen.push(DTOgebruikerID);
        console.log('komt er wat in de lijst?', this.lijstGebruikersKoppelen);
        this.gekoppeld=true;   
         
    }   
    
    verwijderUitLijstGebruikerDTO(gebruikerID){
      let DTOgebruikerID:DTOGebruikerID = new DTOGebruikerID;
      DTOgebruikerID.id = gebruikerID;
      console.log(this.lijstGebruikersKoppelen);
      console.log('weet je het zeker?');
      console.log(this.lijstGebruikersKoppelen.indexOf(DTOgebruikerID));
      var index = this.lijstGebruikersKoppelen.indexOf(DTOgebruikerID)
      this.lijstGebruikersKoppelen.splice(index);
      console.log(this.lijstGebruikersKoppelen);
      this.gekoppeld=false;
    }
}


