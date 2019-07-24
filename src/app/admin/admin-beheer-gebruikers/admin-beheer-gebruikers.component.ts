import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { Gebruiker } from 'src/app/gebruiker';
import { ModalService } from 'src/app/services/modal.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'wsa-admin-beheer-gebruikers',
  templateUrl: './admin-beheer-gebruikers.component.html',
  styleUrls: ['./admin-beheer-gebruikers.component.scss']
})
export class AdminBeheerGebruikersComponent implements OnInit {
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

  closeModal() {
      this.modalService.close('gebruikers-modal');
  }
  

  wijzigGebruiker(gebruiker:Gebruiker){
    console.log("hij doet het hier nog");
    gebruiker.actief= parsedocument.getElementById("actiefCheckbox");
    this.gebruikerService.wijzigGebruiker(gebruiker,gebruiker.id)
    .subscribe(response => this.router.navigateByUrl('/admin'));
  } 

  clickWijzigModal(id,gebruikerId:number) {
    this.haalGebruikerOpId(gebruikerId);
    this.openModal(id);
	  }
  haalGebruikerOpId(id:number): void {
    this.gebruikerService.vraagGebruikerOpId(id).subscribe(gebruiker => this.gebruikerInvoer = gebruiker);
  }

  
}

