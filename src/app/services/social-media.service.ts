import { Injectable } from '@angular/core';
import axios from 'axios';
import { AuthService } from './auth.service';
import { PostTwitter } from 'src/interfaces/interfaces';

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
    let userID = this.AuthService.getUserID();

    if (post.photo_url !== undefined) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async () => {
          const binaryString = reader.result;
          const base64PhotoFile = btoa(binaryString as string);
          try {
            const response = await axios.post("http://localhost:3000/postTweet", {
              query: {
                _id: userID
              },
              data: {
                message: post.message,
                photo_url: base64PhotoFile
              }
            });
            resolve(response.data)
          } 
          catch (err) {
            console.error(err);
            reject(err)
          }
        }
        reader.readAsBinaryString(post.photo_url);
      })     
    }
    else {
      try {
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
      } 
      catch (err) {
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

  async getTwitterStats() {
    try {
      const user = await this.AuthService.getUserLogged();
      const userTwitter = user.twitterUserName;
      const response = await axios.get(`http://localhost:3000/tweets/${userTwitter}`);
      return response.data;
    } catch (err) {
      return console.error(err);
    }
  }
}
