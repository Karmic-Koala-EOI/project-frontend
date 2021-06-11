import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tokenGoogle : string = "";
  idUsuario : string = "";

  constructor(private route : ActivatedRoute, private AuthService :  AuthService) {
    this.route.queryParams.subscribe(params => {
      this.tokenGoogle = params['google'];
      this.idUsuario = params['id'];
    });
    if(this.tokenGoogle !== undefined) {
      this.AuthService.setToken(this.tokenGoogle);
    }
    if(this.idUsuario !== undefined) {
      this.AuthService.setUser(this.idUsuario);
    }
  }

  ngOnInit(): void {
  }
}