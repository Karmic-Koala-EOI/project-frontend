import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  async updateProfile(user: any, email: string, token: string) {
    return axios.patch(`https://karmic-koala-backend.vercel.app/${email}`, user, {
      headers: {
        authorization: 'Bearer ' + token
      }
      })
    .then(response => response) 
    .catch(err => console.error(err));
  }
}
