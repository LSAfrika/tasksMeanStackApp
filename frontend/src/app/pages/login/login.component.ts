import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email=''
  password=''
  reenteredpassword=''
  login=true
  constructor(public auth:AuthService,private router:Router,private ui:UiService) { }

  ngOnInit(): void {
    const token:any =localStorage.getItem('token')
    console.log('login copmonent token: ',token);
    if(token){

      this.auth.silentlogin(token)  
    }
  }

  togglelogin(){
    this.login=!this.login
  }

  Applogin(){
    if(this.email.trim().length===0||this.password.trim().length===0){
      alert('email/password field can\'t be empty')
      return
    }
    this.auth.email=this.email
    this.auth.password=this.password

    console.log('auth service credentials: ',this.auth.email,this.auth.password);
    
    this.auth.login().subscribe(res=>{
      console.log(res);
      this.password=''
      this.email=''
      // this.ui.togglemenu()
      const token =  localStorage.setItem('token',res.sigintoken)
     this.auth.verifytoken(res.sigintoken)
      

     // this.router.navigateByUrl('/views/tasks')
      

    },err=>{
      console.log('login error: ',err.error);
      alert(err.error.message)
      
    })

  }

  appsignup(){

    if(this.password.trim().length===0 ||this.reenteredpassword.trim().length===0||this.email.trim().length===0){
      alert('please fill all the fields')
      return
    }
    
    
    if(this.password!==this.reenteredpassword){
      alert('password missmatch')
      return
    }
    if(this.password.trim().length<6 ||this.reenteredpassword.trim().length<6){
      alert('password cant be less than 6 charachters')
      return
    }

    this.auth.password=this.password
    this.auth.reenteredpassword=this.reenteredpassword
    this.auth.email=this.email
    this.auth.signup().subscribe(res=>{
      console.log('signup response: ',res);
      
    },err=>{
      alert('email already in use')
      this.auth.password=this.password=this.auth.reenteredpassword=this.reenteredpassword= this.auth.email=this.email=''
      
        
    

      console.log('signup error: ',err.error.message);
      
    })

  }
}
