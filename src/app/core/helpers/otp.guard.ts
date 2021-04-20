import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { getString, setString } from '@nativescript/core/application-settings';

@Injectable()
export class OtpGuard implements CanActivate {
  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    if (true) {
      return true
    } else {
      setString("redirectUrl", url);
      this._router.navigate(['/login-options'])
      return false
    }
  }


}
