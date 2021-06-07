import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CookieService } from "ngx-cookie-service";
import { User } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = {
    _id: "",
    userName: "",
    email: "",
    company: "",
    country: "",
    twitterLogged: false
  };

  constructor(private cookie : CookieService, private AuthService : AuthService) { }

  loged : boolean = true;

  ngOnInit(): void {
    this.getUserLogged();
  }

  getUserLogged() {
    this.AuthService.getUserLogged()
      .then(user => {
        if(user) {
          console.log(user);
          this.user = user;
        }
        else {
          this.user = {
            _id: "",
            userName: "",
            email: "",
            company: "",
            country: "",
            twitterLogged: false
          };
        }
      })
  }

  logout() {
    this.AuthService.logout();
  }
}