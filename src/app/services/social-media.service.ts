import { Injectable } from '@angular/core';
import axios from 'axios';
import { AuthService } from './auth.service';
import { PostTwitter } from 'src/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  base64PhotoURL : any = undefined;

  constructor(private AuthService : AuthService) { }

  async loginTwitter() {
    let userID = this.AuthService.getUserID();

    try {
      const response = await axios.get("http://localhost:3000/auth/twitter", {
        params: {
          _id: userID
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

  async postTwitter(post : PostTwitter) {
    console.log(post);
    let userID = this.AuthService.getUserID();

    if (post.photo_url !== undefined) {

       return new Promise((resolve, reject) => {
        
       const reader = new FileReader();
       reader.onload = async () => {
        console.log("hola soy handle");

        const binaryString = reader.result
        const base64PhotoURL = btoa(binaryString as string);
        
        try {
          console.log(base64PhotoURL);
          const response = await axios.post("http://localhost:3000/postTweet", {
            query: {
              _id: userID
            },
            data: {
              message: post.message,
              photo_url: base64PhotoURL
            }
          });
          resolve(response.data)
        } catch (err) {
          console.error(err);
          reject(err)
          }
        
      }
         reader.readAsBinaryString(post.photo_url);

      })

        
    }
    else {
      try {
        console.log(this.base64PhotoURL);
        const response = await axios.post("http://localhost:3000/postTweet", {
          query: {
            _id: userID
          },
          data: {
            message: post.message,
            photo_url: ""
          }
        });
        return response.data;
      } catch (err) {
        return console.error(err);
      }
    }

  }


  async getTrendingTwitter(country : string) {
    try {
      const response = await axios.get(`http://localhost:3000/tweets/trending/${country}`);
      return response.data;
    } catch (err) {
      return console.error(err);
    }
  }
}
