import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { ModalService } from 'src/app/services/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wsa-beheer-gebruikers',
  templateUrl: './beheer-gebruikers.component.html',
  styleUrls: ['./beheer-gebruikers.component.scss']
})
export class BeheerGebruikersComponent implements OnInit {
  gebruikerInvoer: Gebruiker = new Gebruiker;
  actieveGebruikers : Gebruiker[];
  private api:string = environment.apiUrl;
  bodyText:string;

 
  constructor(private router: Router, private modalService: ModalService, private gebruikerService : GebruikersService) { }
 
  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
    this.haalActieveGebruikers();
  }
  
  haalActieveGebruikers(): void {
    this.gebruikerService.geefActieveGebruikers()
        .subscribe(gebruikers => this.actieveGebruikers = gebruikers);
  }
     
    openModal(id) {
      this.modalService.open(id);
  }

  sluitModal(id) {
      this.modalService.close(id);
  }
  
  haalGebruikerOpId(id:number): void {
    this.gebruikerService.vraagGebruikerOpId(id).subscribe(gebruiker => this.gebruikerInvoer = gebruiker);
  }

  voegGebruikerToe(gebruiker:Gebruiker) {
    this.gebruikerService.gebruikerToevoegen(gebruiker)
    .subscribe(response => this.router.navigateByUrl('/admin').then(Succes => { 
      this.router.navigateByUrl('/admin/admin-beheer-gebruikers')
    }));
  }
}

