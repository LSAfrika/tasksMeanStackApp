import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

 
 
  constructor(private router:Router,public ui:UiService,private auth:AuthService) { }

  ngOnInit(): void {
  }

  loginpage(){

    if(this.ui.authtext==='log out'){
      this.auth.logout()

    }

    this.ui.ishidden=true
    this.router.navigateByUrl('/views')
  }
 

}
