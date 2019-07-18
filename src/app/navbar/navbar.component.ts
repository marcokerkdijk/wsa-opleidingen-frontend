import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AutenticatieService, JwtResponse} from "../services/autenticatie.service";
import {Router} from "@angular/router";
import {TokenService} from "../services/token.service";

import { ModalService } from '../services/modal.service';

@Component({
  selector: 'wsa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loginform: FormGroup;
  ingelogd: boolean = false;

  constructor(private modalService: ModalService, private fb: FormBuilder, private router: Router, 
              private autenticatieService: AutenticatieService, private tokenService: TokenService) {
    
    this.loginform = this.fb.group({
      emailadres: ['', Validators.required],
      wachtwoord: ['', Validators.required]
    });
  }

  ngOnInit() {
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
