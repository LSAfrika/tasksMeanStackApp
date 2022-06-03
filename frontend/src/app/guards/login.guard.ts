import { Injectable } from '@angular/core';
import {  CanActivateChild,  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivateChild {


  constructor(private router:Router,private auth:AuthService){}
  canActivateChild() {

    return true;
  }
  
}
