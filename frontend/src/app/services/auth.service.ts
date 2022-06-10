import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl='http://localhost:3000/api'
  password=''
  reenteredpassword=''
  email=''
  userid=''
  token=''
  splashscreen=true
  constructor(private http:HttpClient,private router:Router) { }



  login():Observable<any>{
    const credentials ={
     password: this.password,
     email: this.email
    }
    return this.http.post(this.baseurl+'/signin',credentials)
  }

  signup(){

   

    const newuser={
      password:this.password,
      reenteredpassword:this.reenteredpassword,
      email:this.email
    }
    return this.http.post(this.baseurl+'/signup',newuser)

  }

  verifytoken(token:any){
    console.log('token from lohin authservice: ',token);
    this.token=token
    const result:any=jwt_decode(token);
    this.userid=result.id
    console.log(result);
      this.router.navigateByUrl('/views/tasks')

  }

  silentlogin(token:string){
    const result:any=jwt_decode(token);
    console.log('decoded token: ',result);
   
    
    // const date =Date.now().toString()
    // const compareddate =date.substring(0,10)
    // const currentdate =parseInt(compareddate)
    const currentdate= Date.now()
    console.log('ctokentime:',currentdate);
    
    console.log('ttokentime:',result.exp);
   // console.log('stringed date: ',currentdate);
    
    if(result.exp>currentdate ){
      setTimeout(() => {
        this.userid=result.id
        this.token=token
        this.splashscreen=false
        this.router.navigateByUrl('/views/tasks')
      }, 2000);

    }else{
      localStorage.removeItem('token')
      this.router.navigateByUrl('/views')

    }
    


  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigateByUrl('/views')
  }
}
