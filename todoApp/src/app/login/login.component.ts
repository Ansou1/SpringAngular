import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthService } from '../service/hardcodedauth.service';
import {BasicAuthService} from '../service/basicauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'default';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidlogin = false;

  constructor(private router: Router, private hardcodedauth: HardcodedauthService, private basicauth: BasicAuthService) { }

  ngOnInit() {
  }

  handleLogin() {
    console.log(this.username);
    console.log(this.password);

    if (this.hardcodedauth.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
      this.invalidlogin = false;
    } else {
      this.invalidlogin = true;
    }
  }

  handleBasicAuthLogin() {
    console.log(this.username);
    console.log(this.password);

    this.basicauth.executeAuthenticationService(this.username, this.password).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['welcome', this.username]);
        this.invalidlogin = false;
      },
      error => {
        console.log(error);
        this.invalidlogin = true;
      }
    );
  }
}
