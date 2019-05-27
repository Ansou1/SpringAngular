import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  username = '';
  message = 'Welcome component message';
  welcomeMessageFromService: string;

  constructor(private route: ActivatedRoute, private service: WelcomeDataService) { }

  ngOnInit() {
    console.log(this.message);
    console.log(this.route.snapshot.params['name']);
    this.username = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    console.log('Last line of the getWelcomeMessage from welcome.component.ts');
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
    console.log(response);
    console.log(response.message);
  }


  handleErrorResponse(error) {
    console.log(error);
    console.log(error.message);
  }

  getWelcomeMessageWithPath() {
    this.service.executeHelloWorldServiceWithPath(this.username).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    console.log('Last line of the getWelcomeMessage from welcome.component.ts');
  }
}
