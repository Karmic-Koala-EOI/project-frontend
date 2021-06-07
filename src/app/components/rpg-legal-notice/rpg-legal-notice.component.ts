import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-rpg-legal-notice',
  templateUrl: './rpg-legal-notice.component.html',
  styleUrls: ['./rpg-legal-notice.component.css']
})
export class RpgLegalNoticeComponent implements OnInit {
  
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
                                              });
  }

  logout() {
    this.AuthService.logout();
  }

}
