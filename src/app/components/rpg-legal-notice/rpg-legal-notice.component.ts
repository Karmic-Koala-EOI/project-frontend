import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-rpg-legal-notice',
  templateUrl: './rpg-legal-notice.component.html',
  styleUrls: ['./rpg-legal-notice.component.css']
})
export class RpgLegalNoticeComponent implements OnInit {user: any = null;

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
