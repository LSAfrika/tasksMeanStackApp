import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoexpress';
  constructor(private activroute:Router){
    const route = this.activroute.url
    
   
    //  if(route==='/'){
    //    activroute.navigateByUrl('/views')
    //  }
      
   

  }
}
