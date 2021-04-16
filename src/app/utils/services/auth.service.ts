import { Injectable } from '@angular/core';
//import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { getString, setString } from '@nativescript/core/application-settings';

import * as shajs from 'sha.js';
import { RouterExtensions } from 'nativescript-angular';

var appSettings = require("application-settings");

@Injectable()
export class AuthService {




  constructor(
    private routerExtensions: RouterExtensions) {
  }

  logoutUser() {
    appSettings.remove('token')
  }
  loggedIn() {
    return !!getString('token');
  }

  loginUser(user) {
    // private httpClient: HttpClient,
    // return this.httpClient.post<any>("/api/users", user);
  }

}

