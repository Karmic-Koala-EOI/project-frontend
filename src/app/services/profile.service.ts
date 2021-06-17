import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from 'src/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  async updateProfile(user: User, email: string, token: string) {
    return axios.patch(`http://localhost:3000/${email}`, user, {
      headers: {
        authorization: 'Bearer ' + token
      }
      })
    .then(response => response) 
    .catch(err => console.error(err));
  }
  async unlinkTwitter(user: {tokenTwitter: string, tokenSecretTwitter: string, twitterUserName: string}, email: string, token: string) {
    return axios.patch(`http://localhost:3000/${email}`, user, {

      headers: {
        authorization: 'Bearer ' + token
      }
      })
    .then(response => response) 
    .catch(err => console.error(err));
  }
}
