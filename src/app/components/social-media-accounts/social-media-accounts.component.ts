import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from 'src/app/services/social-media.service'
import { AuthService } from 'src/app/services/auth.service';
import axios from 'axios';
import { Router } from '@angular/router';
import { User } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-social-media-accounts',
  templateUrl: './social-media-accounts.component.html',
  styleUrls: ['./social-media-accounts.component.css']
})
export class SocialMediaAccountsComponent implements OnInit {

  LoggedTwitter: boolean = false;

  user: User = {
    _id: "",
    userName: "",
    email: "",
    company: "",
    country: "",
    twitterLogged: false
  };

  constructor(private SocialMediaService : SocialMediaService, private AuthService : AuthService, private Router : Router) { }

  ngOnInit(): void {
    this.isLoggedTwitter();
    this.getUserLogged();
  }

  // loginTwitter() {
  //   let userTwitter = this.SocialMediaService.loginTwitter();

  //   userTwitter ? console.log(userTwitter) : console.log("error login twitter");
  // }

  async loginTwitter() {
    let userID = this.AuthService.getUserID();

    // try {
    //   const response = await axios.get("http://localhost:3000/auth/twitter", {
    //     params: {
    //       id: userID
    //     }
    //   });
    //   return response ? console.log(response.data) : console.log("Error en el login");
    // } catch (err) {
    //   return console.error(err);
    // }
    window.location.href = `http://localhost:3000/auth/twitter?id=${userID}`;
  }

  isLoggedTwitter() {
    this.SocialMediaService.isLoggedTwitter()
      .then(logged => this.LoggedTwitter = logged);
  }

  getUserLogged() {
    this.AuthService.getUserLogged()
      .then(user => user ? this.user = user : this.user = {
                                                _id: "",
                                                userName: "",
                                                email: "",
                                                company: "",
                                                country: "",
                                                twitterLogged: false
                                              });
  }

  logout() {
    this.AuthService.logout();
  }

}
