import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  username = ''
  message = 'Welcome component message'

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.message)
    console.log(this.route.snapshot.params['name'])
    this.username = this.route.snapshot.params['name']
  }
}
