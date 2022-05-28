import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import {SharedModule} from '../app/modules/shared/shared.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './pages/home/home.component';
import {HttpClientModule} from '@angular/common/http';
// import { ModalComponent } from './sharedcomponents/modal/modal.component';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from './modules/shared/shared.module';
// import { NavComponent } from './sharedcomponents/nav/nav.component';



@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // ModalComponent,
    LoginComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,SharedModule
 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
