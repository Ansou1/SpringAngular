import { Injectable } from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders} from '@angular/common/http';
import {API_URL} from '../../app.constants';


export class HelloWorldBean {

  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(private Http: HttpClient) { }

  executeHelloWorldService() {
    return this.Http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
  }

  executeHelloWorldServiceWithPath(name) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    //
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })

    return this.Http.get<HelloWorldBean>(`${API_URL}/bean-hello/${name}`);
  }




  // createBasicAuthenticationHttpHeader() {
  //   let username = 'simon';
  //   let password = 'simon';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
