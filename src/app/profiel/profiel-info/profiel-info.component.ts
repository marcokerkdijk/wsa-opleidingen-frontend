import { Component, OnInit } from '@angular/core';
import { JwtToken, AutenticatieService } from 'src/app/services/autenticatie.service';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WijzigWachtwoordDTO } from 'src/app/Objecten/wijzig-wachtwoord-dto';

@Component({
  selector: 'wsa-profiel-info',
  templateUrl: './profiel-info.component.html',
  styleUrls: ['./profiel-info.component.scss']
})
export class ProfielInfoComponent implements OnInit {
  wijzigWachtwoordForm: FormGroup;
  token: JwtToken;
  gebruiker: Gebruiker = new Gebruiker();
  zichtbaar: Boolean;
  wachtwoordDTO: WijzigWachtwoordDTO = new WijzigWachtwoordDTO();

  constructor(private authenticatieService: AutenticatieService, private gebruikersService: GebruikersService,
              private fb: FormBuilder) {
    
    this.wijzigWachtwoordForm = this.fb.group({
      huidigwachtwoord: ['', Validators.required],
      nieuwwachtwoord: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.haalTokenOp();
    this.haalGebruikerOp();
  }

  haalTokenOp():void {
    this.token = this.authenticatieService.haalTokenOp();
  }

  haalGebruikerOp(): void {
    this.gebruikersService.vraagGebruikerOpId(this.token.gebruiker_id)
        .subscribe(opgehaaldeGebruiker => this.gebruiker = opgehaaldeGebruiker);
  }

  showForm(): void {
    this.zichtbaar = ! this.zichtbaar;
  }

  wijzigWachtwoord(id: number): void {
    const val = this.wijzigWachtwoordForm.value;

    this.wachtwoordDTO.huidigWachtwoord = val.huidigwachtwoord;
    this.wachtwoordDTO.nieuwWachtwoord = val.nieuwwachtwoord;

    this.gebruikersService.wijzigWachtwoord(id, this.wachtwoordDTO)
        .subscribe(response => {
          this.wijzigWachtwoordForm.reset();
          this.showForm()
        });
  }
}
