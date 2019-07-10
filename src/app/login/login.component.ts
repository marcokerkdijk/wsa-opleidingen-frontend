import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AutenticatieService, JwtResponse} from "../services/autenticatie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'wsa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private autenticatieService: AutenticatieService) {

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
            console.log(token);
            this.router.navigateByUrl('/home');
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }
}
