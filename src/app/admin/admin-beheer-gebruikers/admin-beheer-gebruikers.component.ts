import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { Gebruiker } from 'src/app/gebruiker';

@Component({
  selector: 'wsa-admin-beheer-gebruikers',
  templateUrl: './admin-beheer-gebruikers.component.html',
  styleUrls: ['./admin-beheer-gebruikers.component.scss']
})
export class AdminBeheerGebruikersComponent implements OnInit {

  actieveGebruikers : Gebruiker[];
  private api:string = environment.apiUrl;
 
  constructor(private gebruikerService : GebruikersService) { }
 
  ngOnInit() {
    this.haalActieveGebruikers();
  }
  
  haalActieveGebruikers(): void {
    this.gebruikerService.geefActieveGebruikers()
        .subscribe(gebruikers => this.actieveGebruikers = gebruikers);
  }
}
