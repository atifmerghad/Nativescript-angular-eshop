import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { getString, setString } from '@nativescript/core/application-settings';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("APPLY AUTHGUARD PAGE !")
    let url: string = state.url;
    if (this.authService.loggedIn()) {

      return true
    } else {
      setString("redirectUrl", url);
      this.router.navigate(['/login'])
      return false
    }
  }


}
