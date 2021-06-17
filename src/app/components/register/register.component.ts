import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    //  userName : new FormControl('', Validators.required ),
    //  email: new FormControl(''),
    //  password: new FormControl(''),
  });

  errorReg : boolean = false;
 
  constructor(private AuthService :  AuthService, private Router : Router) {
    this.registerForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      email: new FormControl('',
        {validators: [Validators.required, Validators.email],
        updateOn: 'change'} 
      ),
      password: new FormControl ('',
      {validators:[ Validators.required, Validators.minLength(8), Validators.maxLength(15),
	 	  // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
       Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9  !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~€£¥₩])(?=.*?[A-Z 0-9]).{8,15}$")
    ],
       updateOn: 'change'}
      ),
   });
   }

  ngOnInit(): void {
  }
 
  submitRegister() {
    this.AuthService.register(this.registerForm.value)
      .then(res => {
        if(res){ 
          this.AuthService.setToken(res.token);
          this.AuthService.setUser(res.usuario._id);
          this.Router.navigateByUrl('/');
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
