import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  viewmodal=false
  constructor() { }

  togglemodal(){
    this.viewmodal=!this.viewmodal
  }
}
