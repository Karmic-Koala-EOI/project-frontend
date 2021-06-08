import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css']
})
export class HomeNavbarComponent implements OnInit {

  user: User = {
    _id: "",
    userName: "",
    email: "",
    company: "",
    country: "",
    twitterLogged: false
  };

  userLogged : boolean = false;

  constructor(private AuthService : AuthService) { }

  ngOnInit(): void {
    this.getUserLogged();
  }

  getUserLogged() {
    this.AuthService.getUserLogged()
      .then(user => {
        if(user) {
          console.log(user);
          this.user = user;
          this.userLogged =  true;
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
          this.userLogged =  false;
        }
      })
  }

  logout() {
    this.AuthService.logout();
  }

}
