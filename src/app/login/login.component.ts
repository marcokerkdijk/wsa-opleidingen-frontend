import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AutenticatieService, JwtResponse} from "../services/autenticatie.service";
import {Router} from "@angular/router";
import {TokenService} from "../services/token.service";

@Component({
  selector: 'wsa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private autenticatieService: AutenticatieService,
              private tokenService: TokenService) {

    this.loginform = this.fb.group({
      emailadres: ['', Validators.required],
      wachtwoord: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  public login(): void {

    const val = this.loginform.value;

    if (val.emailadres && val.wachtwoord) {
      this.autenticatieService.login(val.emailadres, val.wachtwoord)
        .subscribe(
          (token: JwtResponse) => {

            this.tokenService.setAutoristatieToken(token);

            const redirect = this.autenticatieService.redirectUrl ? this.router.parseUrl(this.autenticatieService.redirectUrl) : this.autenticatieService.routePerRol();
            this.router.navigateByUrl(redirect);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }
}
