import { Component, OnInit, HostListener } from '@angular/core';
import { AutenticatieService } from 'src/app/services/autenticatie.service';
import { TekstobjectService } from 'src/app/services/tekstobject.service';
import { TekstObject } from 'src/app/Objecten/tekst-object';
import { NgxLinkifyjsModule} from 'ngx-linkifyjs';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { Router } from '@angular/router';

@Component({
  selector: 'wsa-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  gebruiker: Gebruiker = new Gebruiker;
  tekstObject: TekstObject = new TekstObject();
  counter: number = 36000;

  constructor(
    private authenticatieService:AutenticatieService,
    private tekstobjectservice: TekstobjectService,
    private gebruikersService: GebruikersService,
    private router : Router) { }

  ngOnInit() {
    this.haalGebruikerOp();
    this.getTekstObject(9);
    
  }

  haalGebruikerOp():void {
    let token = this.authenticatieService.haalTokenOp();
    this.gebruikersService.vraagGebruikerOpId(token.gebruiker_id).subscribe(opgehaaldeGebruiker => {
      this.gebruiker = opgehaaldeGebruiker;
    })
  }

  getTekstObject(tekstObject_id: number) {
    this.tekstobjectservice.haalTekstObjectOpId(tekstObject_id).subscribe(opgehaaldTekstObject => this.tekstObject = opgehaaldTekstObject);
  }

  sessieTeller(){
    for (let index=360000; this.counter > 0 ; index--) {
      this.counter--
      console.log(this.counter)
      if (this.counter == 1){
        const redirect = this.authenticatieService.logout();
        this.router.navigateByUrl(redirect);

      }
 
    }
  }
  
  @HostListener('click') resetTimer() {
    this.counter=360000
  }

}