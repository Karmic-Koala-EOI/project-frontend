import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.css']
})
export class DashboardNavbarComponent implements OnInit {

  constructor(private AuthService : AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.AuthService.logout();
  }

}
