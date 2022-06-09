import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Task} from '../model/task'
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl='http://localhost:3000/api'
  list:Task[]=[]
  id=''
  index=0

  constructor(private http:HttpClient,private auth:AuthService) {

    // this.hello()
    this.fetchtasks()

   }

   hello(){

     this.http.get('http://localhost:3000/api/test').subscribe(res=>{
       console.log(res);
       
     },err=>{
      console.log(err);
      
    })

   }

   posttask(task:string){
    const headers = new HttpHeaders();
    console.log('token attached to request: ',this.auth.token);
    
    headers.set('Authorization', `Bearer ${this.auth.token}`);
   return this.http.post<Task>(this.baseurl+'/posttask',{task},{
    headers: new HttpHeaders().set('Authorization',`Bearer ${this.auth.token}` )
})}

   fetchtasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.baseurl+'/gettasks')
   }
   updatetask(task:Task){
     return this.http.patch(this.baseurl+`/patchtask/${task.id}`,task)
     
   }

   deletetask(id:string){
     return this.http.delete(this.baseurl+`/deletetask/${id}`)
   }
}
