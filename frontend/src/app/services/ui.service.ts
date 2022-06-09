import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  viewmodal=false
  ishidden=true
  authtext = 'log in'
  constructor() {
    this.authstatus()
   }

  togglemodal(){
    
    this.viewmodal=!this.viewmodal
    console.log('view/close modal',this.viewmodal);
  }
  togglemenu(){
    // console.log('click fired from auth service');
    
    this.ishidden=!this.ishidden
  }

  authstatus(){
    const token=localStorage.getItem('token')
    if(token){
      return this.authtext='log out'
    }
    return this.authtext='log out'

  }




}
