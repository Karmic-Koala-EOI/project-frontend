import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';
import { User } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = {
    _id: "",
    userName: "",
    email: "",
    company: "",
    country: "",
    twitterLogged: false,
    twitterUserName: ""
  };

  profileForm = new FormGroup({
    userName: new FormControl(''),
    company: new FormControl(''),
    country: new FormControl('')
  });
  
  errorReg : boolean = false;
  updateOk : boolean = false;

  constructor(private AuthService : AuthService, private ProfileService : ProfileService, private Router : Router) { }

  ngOnInit(): void {
    this.getUserLogged();
  }

  getUserLogged() {
    this.AuthService.getUserLogged()
      .then(user => {
        if(user) {
          this.user.email = user.email;
          this.user.userName = user.userName;
          this.user.company = user.company || "";
          this.user.country = user.country || "";
          this.profileForm.setValue({userName: this.user.userName, company: this.user.company, country: this.user.country})
        }
        else {
          this.user = {
            _id: "",
            userName: "",
            email: "",
            company: "",
            country: "",
            twitterLogged: false,
            twitterUserName: ""
          };
        }
      })
  }

  submitProfile() {
    this.errorReg = false;
    this.updateOk = false;
    this.ProfileService.updateProfile(this.profileForm.value, this.user.email, this.AuthService.getToken())
      .then(res => {
        if(res){ 
          this.Router.navigateByUrl('/dashboard/profile');
          this.updateOk = true;
        }
        else {
          this.errorReg = true;
        }
      })
      .catch(error => {
        console.log(error);
        this.errorReg = true;
      });
  }
}
