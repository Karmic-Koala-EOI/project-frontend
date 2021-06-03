import { Injectable } from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';
import { logging } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logged : boolean = false;

  constructor(private cookies: CookieService, private Router : Router) { }

  // Login
  async login(user: any) : Promise<{token: string}> {
    return axios.post("https://karmic-koala-backend.vercel.app/login/", user)
    .then(response => response.data ? response.data : "Error en el login")
    .catch(err => console.error(err));
  }

  isLogin(logged : boolean) {
    console.log(logged);
    this.logged = logged;
  }

  loged() {
    console.log("llamada desde el guard " + this.logged);
    return this.logged;
  }

  // Register
  async register(user: any) {
    return axios.post("https://karmic-koala-backend.vercel.app/register/", user, {
      headers: {"Access-Control-Allow-Origin": "*"}
    })
    .then(response => response ? this.login(user) : response) 
    .catch(err => console.error(err));
  }

  // Token
  setToken(token: string) {
    this.cookies.set("token", token);
  }

  getToken() {
    return this.cookies.get("token");
  }

  logout() {
    this.cookies.delete("token");
    this.Router.navigateByUrl('/');
  }

  // Get user
  async getUserLogged() {
    const token = this.getToken();
    if(token) {
      return axios.get("https://karmic-koala-backend.vercel.app/", {
      headers: {
        authorization: 'Bearer ' + token
      }
      })
      .then(response => response ? response.data : "Error en el login") 
      .catch(err => console.error(err));
    }
    else {
      return false;
    }
    
  }
}