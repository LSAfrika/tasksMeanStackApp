
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UiService } from 'src/app/services/ui.service';
import {Task} from '../../model/task'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  task=''
  fetchedtask:Task={task:'',id:''};
  newtask=true
  fetchedtaskindex=0
  constructor(public api:ApiService,public ui:UiService) { }

  ngOnInit(): void {
    this.api.fetchtasks().subscribe(res=>{
      console.log(res);
      
      this.api.list=res
    })

  }
  createupdatetask(){
    if(this.newtask===true){this.addtask()}
    if(this.newtask===false){this.updatetask()}

  }

  

  addtask(){
    if(this.task.trim().length<1)return;
   this.api.posttask(this.task).subscribe(res=>{
    console.log('res from server: ',res);
   
  
     this.api.list=[...this.api.list,res]
     this.task=''
  },err=>{
    console.log(err);
    
  }
  )
 

 }
 fetchtask(i:number){
  this.newtask=false;
  console.log(this.newtask);
  this.fetchedtaskindex=i
 this.fetchedtask  =this.api.list[i]
 this.task=this.fetchedtask.task

 } 
 updatetask(){
  
 const data = {id:this.fetchedtask.id,
task:this.task
}
 console.log(data);
 
 this.api.updatetask(data).subscribe(res=>{
   console.log(res);

   this.api.list[this.fetchedtaskindex]=data
   this.task=''
   


  this.newtask=true
 },err=>{
   console.log(err);
   

 })

 }

 deletetask(i:any,id:string){
this.api.index=i
this.api.id=id
console.log(this.api.id,this.api.index);
this.ui.togglemodal()


 }
  
  

  }


