import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from 'src/app/sharedcomponents/modal/modal.component';
import { NavComponent } from 'src/app/sharedcomponents/nav/nav.component';



@NgModule({
  declarations: [
    ModalComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    ModalComponent,NavComponent
  ]

})
export class SharedModule { }
