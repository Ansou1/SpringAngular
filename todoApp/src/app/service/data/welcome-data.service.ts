import { Injectable } from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';


export class HelloWorldBean {

  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(private Http: HttpClient) { }

  executeHelloWorldService() {
    return this.Http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  executeHelloWorldServiceWithPath(name) {
    return this.Http.get<HelloWorldBean>(`http://localhost:8080/bean-hello/${name}`);
  }
}
