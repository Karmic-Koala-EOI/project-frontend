import { Injectable } from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';
import { logging } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private cookies: CookieService, private Router : Router) { }

  // Login
  async login(user: any) : Promise<{token: string, usuario : any}> {
    return axios.post("http://localhost:3000/login/", user)
    .then(response => response.data ? response.data : "Error en el login")
    .catch(err => console.error(err));
  }

  loged() {
    if (this.cookies.get("session") !== "") {
      return true;
    } else {
      return false;
    }
    
  }

  // Register
  async register(user: any) {
    return axios.post("http://localhost:3000/register/", user, {
      headers: {"Access-Control-Allow-Origin": "*"}
    })
    .then(response => response ? this.login(user) : response) 
    .catch(err => console.error(err));
  }

  // Cookies
  setToken(token: string) {
    this.cookies.set("session", token);
  }

  setUser(id: string) {
    this.cookies.set("id", id);
  }

  getToken() {
    return this.cookies.get("session");
  }
  
  getUserID() {
    return this.cookies.get("id");
  }

  logout() {
    this.cookies.delete("session");
    this.cookies.delete("id");
    this.Router.navigateByUrl('/');
  }

  // Get user
  async getUserLogged() {
    const token = this.getToken();
    if(token) {
      return axios.get("http://localhost:3000/", {
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