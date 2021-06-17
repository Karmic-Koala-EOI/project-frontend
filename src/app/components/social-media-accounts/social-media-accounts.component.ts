import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from 'src/app/services/social-media.service'
import { AuthService } from 'src/app/services/auth.service';
import axios from 'axios';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-social-media-accounts',
  templateUrl: './social-media-accounts.component.html',
  styleUrls: ['./social-media-accounts.component.css']
})
export class SocialMediaAccountsComponent implements OnInit {

  LoggedTwitter : boolean = false;
  unlinkError : boolean = false;

  constructor(private SocialMediaService : SocialMediaService, private AuthService : AuthService, private Router : Router, private ProfileService : ProfileService) { }

  ngOnInit(): void {
    this.isLoggedTwitter();
  }

  // loginTwitter() {
  //   let userTwitter = this.SocialMediaService.loginTwitter();

  //   userTwitter ? console.log(userTwitter) : console.log("error login twitter");
  // }

  async loginTwitter() {
    let userID = this.AuthService.getUserID();

    // try {
    //   const response = await axios.get("https://karmic-koala-backend.vercel.app/auth/twitter", {
    //     params: {
    //       id: userID
    //     }
    //   });
    //   return response ? console.log(response.data) : console.log("Error en el login");
    // } catch (err) {
    //   return console.error(err);
    // }
    window.location.href = `http://localhost:3000/auth/twitter?_id=${userID}`;
  }

  unlinkTwitter() {
    let modUser = {tokenTwitter: "", tokenSecretTwitter: ""};
    this.AuthService.getUserLogged()
      .then(user => {
        if(user) {
          this.ProfileService.unlinkTwitter(modUser, user.email, this.AuthService.getToken())
            .then(res => {
              if(res){ 
                this.LoggedTwitter = false;
              }
              else {
                this.unlinkError = true;
              }
            })
            .catch(error => {
              console.log(error);
              this.unlinkError = true;
            });
        }
        else {
          this.unlinkError = true;
        }
      })
  }

  isLoggedTwitter() {
    this.SocialMediaService.isLoggedTwitter()
      .then(logged => this.LoggedTwitter = logged);
  }
}
