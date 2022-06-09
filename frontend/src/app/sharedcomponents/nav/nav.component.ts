import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  authstate='login'
 
  constructor(private router:Router,public ui:UiService) { }

  ngOnInit(): void {
  }

  loginpage(){
    this.ui.ishidden=true
    this.router.navigateByUrl('/views')
  }
 

}
