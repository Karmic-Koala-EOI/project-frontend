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
      // .then(user => user ? this.user = user : this.user = null)
      .then(user => {
        if(user) {
          console.log(user);
          this.user = user;
        }
        else {
          this.user = null
        }
      })
  }

  logout() {
    this.AuthService.logout();
  }
}