import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedauthService {

  constructor() { }

  authenticate(username, password) {
    if(username === 'simon' && password === 'simon') {
      sessionStorage.setItem("authenticatedUser", username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser")
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser")
  }

}