import { Component, OnInit } from '@angular/core';
import { HardcodedauthService } from '../service/hardcodedauth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //isUserLoggedIn = false

  constructor(private hardcodeedauth: HardcodedauthService) { }

  ngOnInit() {
    //this.isUserLoggedIn = this.hardcodeedauth.isUserLoggedIn()
  }

}
