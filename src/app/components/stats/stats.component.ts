import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from 'src/app/services/social-media.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  stats : string[] = [];
  totalLikes : number = 0;
  totalRetweets : number = 0;

  constructor(private SocialMediaService : SocialMediaService) { }

  ngOnInit(): void {
    this.getTwitterStats();
  }

  async getTwitterStats(){
    try {
      const response = await this.SocialMediaService.getTwitterStats();
      console.log(response);
      response.forEach((stat : any) => {
        // let date = new Date(stat.created_at);
        // console.log(date.getFullYear());
        // console.log(date.getMonth());

        this.totalLikes += stat.favorite_count;
        this.totalRetweets += stat.retweet_count;
      });
    }
    catch (err) {
      return console.error(err);
    }
  }
}