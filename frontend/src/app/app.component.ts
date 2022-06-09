import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoexpress';
  
  constructor(public auth:AuthService,private ui:UiService){
 
      const token = localStorage.getItem('token')
      console.log('app component token : ',token);
      

      if(token){

        this.auth.silentlogin(token)
      }else{
        auth.splashscreen=false
        this.ui.authtext='log in'
      }
   

  }
}
