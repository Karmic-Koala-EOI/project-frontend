import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SocialMediaService } from 'src/app/services/social-media.service';

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
  errorLog = false;

  constructor(private SocialMediaService : SocialMediaService) { }

  ngOnInit(): void {
  }

  submitPostTwitter() {
    this.SocialMediaService.postTwitter(this.postTwitterForm.value)
  }

}
