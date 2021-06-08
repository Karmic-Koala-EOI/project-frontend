import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from 'src/app/services/social-media.service';
import { AuthService } from '../../services/auth.service';
import { User, TrendingTwitter } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User = {
    _id: "",
    userName: "",
    email: "",
    company: "",
    country: "",
    twitterLogged: false
  };

  userLogged : boolean = false;
  
  trendingTwitter : TrendingTwitter[] = [];

  constructor(private AuthService : AuthService, private SocialMediaService : SocialMediaService) { }

  ngOnInit(): void {
    this.getUserLogged();
  }

  getUserLogged() {
    this.AuthService.getUserLogged()
      .then(user => {
        if(user) {
          this.user = user;
          this.userLogged =  true;
          this.getTrendingTwitter();
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

  getTrendingTwitter() {
    this.SocialMediaService.getTrendingTwitter(this.user.country)
      .then(trending => {
        this.trendingTwitter = trending.trends.slice(0,5);
      })
  }
}
