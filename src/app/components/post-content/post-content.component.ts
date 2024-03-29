import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SocialMediaService } from 'src/app/services/social-media.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {

  postTwitterForm = new FormGroup({
    message: new FormControl(''),
    photo_url: new FormControl(null),
  });

  postError : boolean = false;
  postOk : boolean = false;

  twitterLogged : boolean = false;

  constructor(private SocialMediaService : SocialMediaService, private AuthService : AuthService) { }

  ngOnInit(): void {
    this.getUserLogged();
  }

  submitPostTwitter(event : any) {
    this.postError = false;
    this.postOk = false;

    let file = event.target[1].files[0];

    this.postTwitterForm.value.photo_url = file;

    this.SocialMediaService.postTwitter(this.postTwitterForm.value)
      .then(res => {
        if(res){ 
          this.postOk = true;
        }
        else {
          this.postError = true;
        }
      })
      .catch(error => {
        console.log(error);
        this.postError = true;
      });
  }

  getUserLogged() {
    this.AuthService.getUserLogged()
      .then(user => user ? this.twitterLogged =  user.twitterLogged : this.twitterLogged =  false)
  }
}
