import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthService } from '../service/hardcodedauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'default'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidlogin = false

  constructor(private router: Router, private hardcodeedauth: HardcodedauthService) { }

  ngOnInit() {
  }

  handleLogin() {
    console.log(this.username)
    console.log(this.password)

    //if(this.username === 'simon' && this.password === 'simon') {
    if(this.hardcodeedauth.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidlogin = false
    } else {
      this.invalidlogin = true
    }
  }
}
