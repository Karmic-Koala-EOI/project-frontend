import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-rpg-legal-terms',
  templateUrl: './rpg-legal-terms.component.html',
  styleUrls: ['./rpg-legal-terms.component.css']
})
export class RpgLegalTermsComponent implements OnInit {
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
