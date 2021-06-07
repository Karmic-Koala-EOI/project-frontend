import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-rpg-cookies',
  templateUrl: './rpg-cookies.component.html',
  styleUrls: ['./rpg-cookies.component.css']
})
export class RPGCookiesComponent implements OnInit {
  user: User = {
    _id: "",
    userName: "",
    email: "",
    company: "",
    country: "",
    twitterLogged: false
  };

  constructor(private AuthService : AuthService) { }

  ngOnInit(): void {
    this.getUserLogged();
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
                                              })
  }

  logout() {
    this.AuthService.logout();
  }

}
