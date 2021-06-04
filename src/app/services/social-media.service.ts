import { Injectable } from '@angular/core';
import axios from 'axios';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  constructor(private AuthService : AuthService) { }

  async loginTwitter() {
    let userID = this.AuthService.getUserID();

    try {
      const response = await axios.get("http://localhost:3000/auth/twitter", {
        params: {
          id: userID
        }
      });
      return response ? response.data : "Error en el login";
    } catch (err) {
      return console.error(err);
    }
  }

  isLoggedTwitter() {
    return this.AuthService.getUserLogged()
      .then(user => user.twitterLogged);
  }

  async postTwitter(post : any) {
    let userID = this.AuthService.getUserID();
    console.log(post);
    try {
      const response = await axios.post("http://localhost:3000/postTweet", {
        query: {
          id: userID
        },
        data: {
          message: post.message,
          photo_url: post.photo_url
        }
      });
      return response.data;
    } catch (err) {
      return console.error(err);
    }
  }
}
