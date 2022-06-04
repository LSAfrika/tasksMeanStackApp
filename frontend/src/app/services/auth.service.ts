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
  email=''
  userid=''
  token=''
  constructor(private http:HttpClient,private router:Router) { }



  login():Observable<any>{
    const credentials ={
     password: this.password,
     email: this.email
    }
    return this.http.post(this.baseurl+'/signin',credentials)
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
    console.log(result);
   
    
    const date =Date.now().toString()
    const compareddate =date.substring(0,10)
    const currentdate =parseInt(compareddate)
    console.log('ctokentime:',currentdate);
    
    console.log('ttokentime:',result.exp);
   // console.log('stringed date: ',currentdate);
    
    if(result.exp>currentdate ){
      setTimeout(() => {
        
        this.router.navigateByUrl('/views/tasks')
      }, 2000);

    }
    


  }
}
