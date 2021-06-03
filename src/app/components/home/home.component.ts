import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any = null;

  constructor( private AuthService : AuthService) { }

  loged : boolean = true;

  ngOnInit(): void {
    this.getUserLogged();
  }

  getUserLogged() {
    this.AuthService.getUserLogged()
      .then(user => {if(user) {
        this.user = user;
        localStorage.setItem("isLogged", "true")
      } else {
        this.user = null;
        localStorage.setItem("isLogged", "false")
      }
      })
  }

  logout() {
    this.AuthService.logout();
  }
}