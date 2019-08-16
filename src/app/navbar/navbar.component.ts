import { Component, OnInit, HostListener } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AutenticatieService, JwtResponse} from "../services/autenticatie.service";
import {Router} from "@angular/router";
import {TokenService} from "../services/token.service";

import { ModalService } from '../services/modal.service';
import { GebruikersService } from '../services/gebruikers.service';

@Component({
  selector: 'wsa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loginform: FormGroup;
  ingelogd: boolean = false;
  vergeten: boolean = false;
  emailgebruiker: string;
  melding: string;
  konamicode: Number[] = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  toetscombinatie: Number[] = new Array;

  constructor(private modalService: ModalService, private fb: FormBuilder, private router: Router, 
              private autenticatieService: AutenticatieService, private tokenService: TokenService,
              private gebruikersService: GebruikersService) {
    
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
  }

  public checkoutKonamiCode(KonamiCode: Number[], IngevoerdeCode: Number[]): boolean {
    const innerArray = KonamiCode.toString();
    const outerArray = IngevoerdeCode.toString();

    const codeIngevoerd = outerArray.includes(innerArray);
    
    return codeIngevoerd;
  }

  public login(): void {
    this.closeModal('login-modal');
    
    const val = this.loginform.value;

    if (val.emailadres && val.wachtwoord) {
      this.autenticatieService.login(val.emailadres, val.wachtwoord)
        .subscribe(
          (token: JwtResponse) => {

            this.tokenService.setAutoristatieToken(token);

            const redirect = this.autenticatieService.redirectUrl ? this.router.parseUrl(this.autenticatieService.redirectUrl) : this.autenticatieService.routePerRol();
            this.ingelogd = this.tokenService.isIngelogd();
            this.router.navigateByUrl(redirect);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  public navigeerNaar(url: string): void {
    this.router.navigateByUrl('/' + url);
  }

  public toggleVergeten(): void {
    this.vergeten = ! this.vergeten;
  }

  public keyDownFunction(event): void {
    if (event.keyCode === 13) {
      this.wachtwoordVergeten();
    }
  }

  public wachtwoordVergeten(): void {
    if (this.emailgebruiker != null) {
      this.gebruikersService.wachtwoordVergeten(this.emailgebruiker)
          .subscribe();
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
