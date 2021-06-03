import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
//import { PrivateKeyInput } from 'crypto';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserIsLoggedGuard implements CanActivate {

  constructor(private auth : AuthService, private router : Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.auth.loged() === false) {
        console.log("En el guard el login es falso");
        return this.router.navigate(['/login']).then(() => false);
      } else {
        console.log("En el guard el login es verdadero");
        return this.router.navigate(['/dashboard']).then(() => true);
      }
      
  }
  
}
