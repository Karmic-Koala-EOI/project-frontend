import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SocialMediaService } from 'src/app/services/social-media.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {

  postTwitterForm = new FormGroup({
    message: new FormControl(''),
    photo_url: new FormControl(''),
  });

  postError : boolean = false;
  postOk : boolean = false;

  user: User = {
    _id: "",
    userName: "",
    email: "",
    company: "",
    country: "",
    twitterLogged: false
  };

  constructor(private SocialMediaService : SocialMediaService, private AuthService : AuthService) { }

  ngOnInit(): void {
    this.getUserLogged();
  }

  submitPostTwitter() {
    this.postError = false;
    this.postOk = false;
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
