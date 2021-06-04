import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-rpg-cookies',
  templateUrl: './rpg-cookies.component.html',
  styleUrls: ['./rpg-cookies.component.css']
})
export class RPGCookiesComponent implements OnInit {
  user: any = null;

  constructor(private AuthService : AuthService) { }

  ngOnInit(): void {
    this.getUserLogged();
  }

  getUserLogged() {
    this.AuthService.getUserLogged()
      .then(user => user ? this.user = user : this.user = null)
  }

  logout() {
    this.AuthService.logout();
  }

}
