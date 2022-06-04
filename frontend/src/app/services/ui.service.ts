import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  viewmodal=false
  hidden=true
  constructor() { }

  togglemodal(){
    
    this.viewmodal=!this.viewmodal
    console.log('view/close modal',this.viewmodal);
  }
  togglemenu(){
    console.log('click fired from auth service');
    
    this.hidden=!this.hidden
  }
}
