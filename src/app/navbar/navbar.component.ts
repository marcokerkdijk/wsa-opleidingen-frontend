import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AutenticatieService, JwtResponse, JwtToken } from "../services/autenticatie.service";
import { Router } from "@angular/router";
import { TokenService } from "../services/token.service";

import { ModalService } from '../services/modal.service';
import { WachtwoordVergetenService } from '../services/wachtwoord-vergeten.service';
import { AlertService } from '../_alert';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'wsa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loginform: FormGroup;
  ingelogd: boolean = false;
  rol: string;
  vergeten: boolean = false;
  emailgebruiker: string;
  konamicode: Number[] = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  toetscombinatie: Number[] = new Array;

  constructor(private modalService: ModalService, private fb: FormBuilder, private router: Router,
    private autenticatieService: AutenticatieService, private tokenService: TokenService,
    private wachtwoordService: WachtwoordVergetenService,
    private alertService: AlertService, private spinner: NgxSpinnerService) {

    this.loginform = this.fb.group({
      emailadres: ['', Validators.required],
      wachtwoord: ['', Validators.required]
    });
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {

    this.toetscombinatie.push(event.keyCode);

    if (this.checkoutKonamiCode(this.konamicode, this.toetscombinatie)) {
      this.toetscombinatie.splice(0, this.toetscombinatie.length);
      alert("EASTER EGG LOL");
    }

    if (this.toetscombinatie.length === 25) {
      this.toetscombinatie.splice(0, 25);
    }
  }

  ngOnInit() {
    this.ingelogd = this.tokenService.isIngelogd();
    
    if (this.ingelogd == true) {
      this.rol = this.autenticatieService.krijgRol();
    }
  }

  public checkoutKonamiCode(KonamiCode: Number[], IngevoerdeCode: Number[]): boolean {
    const innerArray = KonamiCode.toString();
    const outerArray = IngevoerdeCode.toString();

    const codeIngevoerd = outerArray.includes(innerArray);

    return codeIngevoerd;
  }

  public login(): void {
    this.spinner.show("laadspinner", {
      type: "ball-square-clockwise-spin",
      color: "#00aeef",
      bdColor: "transparent",
      size: "medium",
    });

    const val = this.loginform.value;

    if (val.emailadres && val.wachtwoord) {
      this.autenticatieService.login(val.emailadres, val.wachtwoord)
        .subscribe(
          (token: JwtResponse) => {

            this.tokenService.setAutoristatieToken(token);

            const redirect = this.autenticatieService.redirectUrl ? this.router.parseUrl(this.autenticatieService.redirectUrl) : this.autenticatieService.routePerRol();
            this.ingelogd = this.tokenService.isIngelogd();
            this.closeModal('login-modal');
            this.spinner.hide("laadspinner");
            this.router.navigateByUrl(redirect);
          },
          (error) => {
            this.spinner.hide("laadspinner");
            console.log(error);
            this.alertService.clear("alert-1");
            this.alertService.error("Uw e-mailadres of wachtwoord is onjuist. Probeer het opnieuw.", "alert-1");
          }
        );
    }
  }

  public navigeerNaar(url: string): void {
    this.router.navigateByUrl('/' + url);
  }

  public toggleVergeten(): void {
    this.vergeten = !this.vergeten;
    this.alertService.clear("alert-1");
  }

  public keyDownFunction(event): void {
    if (event.keyCode === 13) {
      this.wachtwoordVergeten();
    }
  }

  public wachtwoordVergeten(): void {
    if (this.emailgebruiker != null) {
      this.wachtwoordService.wachtwoordVergeten(this.emailgebruiker)
            .subscribe(
              ()  => {
                this.alertService.clear("alert-1");
                this.alertService.success("Er is een email gestuurd met een nieuw wachtwoord.", "alert-1");
              },
              // Hier zit nog een melding in die getoont word op de frontend die er niet hoort te zitten.. geen idee waarom
              // groetjes Wietse :D
              (error) => {
                this.alertService.clear("alert-1");
                this.alertService.error("Het opgegeven emailadres is onjuist, probeer het opnieuw of neem contact op.", "alert-1");
              }
            );
    } else {
      this.alertService.clear("alert-1");
      this.alertService.error("Er is geen emailadres opgegeven, probeer het opnieuw of neem contact op.", "alert-1");
    }
}

  public logout(): void {
    const redirect = this.autenticatieService.logout();
    this.ingelogd = this.tokenService.isIngelogd();
    this.router.navigateByUrl(redirect);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
