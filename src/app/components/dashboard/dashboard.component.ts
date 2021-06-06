import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from 'src/app/services/social-media.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any = null;
  trendingTwitter : any = null;

  constructor(private AuthService : AuthService, private SocialMediaService : SocialMediaService) { }

  ngOnInit(): void {
    this.getUserLogged();
  }

  getUserLogged() {
    this.AuthService.getUserLogged()
      .then(user => {
        if(user) {
          this.user = user;
          this.getTrendingTwitter();
        }
        else {
          this.user = null;
        }
      })
  }

  logout() {
    this.AuthService.logout();
  }

  getTrendingTwitter() {
    console.log(this.user);
    this.SocialMediaService.getTrendingTwitter(this.user.country)
      .then(trending => {
        this.trendingTwitter = trending.trends.slice(0,5);
        console.log(trending.trends);
      })
  }
}
