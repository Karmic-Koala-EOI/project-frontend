import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  errorLog = false;
  
  constructor(private AuthService : AuthService, private Router : Router) { }

  ngOnInit(): void {
  }

  submitLogin() {
    this.AuthService.login(this.loginForm.value)
      .then(res => {
        if(res){
        this.AuthService.setToken(res.token);
        this.AuthService.setUser(res.usuario._id);
        this.Router.navigateByUrl('/');
        }
        else {
          this.errorLog=true;
        }
      })
      .catch(e => {console.log(e)})
  }
}
