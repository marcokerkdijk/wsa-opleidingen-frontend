import { Component, OnInit } from '@angular/core';
import { JwtToken, AutenticatieService } from 'src/app/services/autenticatie.service';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WijzigWachtwoordDTO } from 'src/app/Objecten/wijzig-wachtwoord-dto';
import { AlertService } from 'src/app/_alert';

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
              private fb: FormBuilder, private alertservice: AlertService) {

    this.wijzigWachtwoordForm = this.fb.group({
      huidigwachtwoord: ['', Validators.required],
      nieuwwachtwoord: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.haalTokenOp();
    this.haalGebruikerOp();
  }

  haalTokenOp(): void {
    this.token = this.authenticatieService.haalTokenOp();
  }

  haalGebruikerOp(): void {
    this.gebruikersService.vraagGebruikerOpId(this.token.gebruiker_id)
      .subscribe(opgehaaldeGebruiker => this.gebruiker = opgehaaldeGebruiker);
  }

  showForm(): void {
    this.zichtbaar = !this.zichtbaar;
  }

  wijzigWachtwoord(id: number): void {
    const val = this.wijzigWachtwoordForm.value;

    if (val.huidigwachtwoord && val.nieuwwachtwoord) {

      this.wachtwoordDTO.huidigWachtwoord = val.huidigwachtwoord;
      this.wachtwoordDTO.nieuwWachtwoord = val.nieuwwachtwoord;

      this.gebruikersService.wijzigWachtwoord(id, this.wachtwoordDTO)
        .subscribe(response => {
          this.wijzigWachtwoordForm.reset();
          this.showForm();
          this.alertservice.clear("alert-1");
          this.alertservice.success("Uw wachtwoord is gewijzigd.", "alert-1");
        },
        (error) => {
          this.alertservice.clear("alert-1");
          this.alertservice.error("Het nieuwe wachtwoord dient een grote & kleine letter en cijfer te bevatten.", "alert-1");
        });
    }
    else {
      this.alertservice.clear("alert-1");
      this.alertservice.error("Voer een huidig en nieuw wachtwoord in.", "alert-1");
    }
  }
}
