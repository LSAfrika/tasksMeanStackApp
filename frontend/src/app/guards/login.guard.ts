import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivateChild {
  constructor(private router:Router){}
  canActivateChild() {

      // this.router.navigateByUrl('/views')
      // setTimeout(() => {
        
      //   alert('please log in')
      // }, 2000);
    return true;
  }
  
}
