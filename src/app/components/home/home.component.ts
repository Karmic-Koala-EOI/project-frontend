import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any = null;

  constructor(private AuthService : AuthService) { }

  ngOnInit(): void {
    this.getUserLogged();
  }

  getUserLogged() {
    this.AuthService.getUserLogged()
      .then(user => {if(user) {
        this.user = user;
        console.log("En el home el login es true");
        this.AuthService.isLogin(true);
      } else {
        this.user = null;
        console.log("En el home el login es falso");
        this.AuthService.isLogin(false);
      }
      })
  }

  logout() {
    this.AuthService.logout();
  }
}