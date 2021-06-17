import { Component, OnInit, NgModule } from '@angular/core';
import { SocialMediaService } from 'src/app/services/social-media.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  Data:any [] = [];

  stats : string[] = [];
  totalLikes : number = 0;
  totalRetweets : number = 0;

  single: any[] = [];
  multi: any[] =[];

  // view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Likes';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private SocialMediaService : SocialMediaService) { }

  ngOnInit(): void {
    this.getTwitterStats();
  }

  async getTwitterStats(){
    try {
      const response = await this.SocialMediaService.getTwitterStats();
      console.log(response);
    
      this.Data = response.map((stat : any) => {
        let tweet = { date: new Date(stat.created_at), likes:stat.favorite_count, retweet:stat.retweet_count };
        return tweet;
        // let date = new Date(stat.created_at);
        // console.log(date.getFullYear());
        // console.log(date.getMonth());

        // this.totalLikes += stat.favorite_count;
        // this.totalRetweets += stat.retweet_count;
      });
    }
    catch (err) {
      return console.error(err);
    }
  }
}

// Copiar lo de abajo




  

  // constructor() {
  //   Object.assign(this, { this.Data })
  // }

  // onSelect(event:any) {
  //   console.log(event);
  // }