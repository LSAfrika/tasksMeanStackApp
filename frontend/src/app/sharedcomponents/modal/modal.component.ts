import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private api:ApiService,private ui:UiService) { }
index=0
id=''
  ngOnInit(): void {
    this.index=this.api.index
    this.id=this.api.id
    console.log(this.index,this.id);
    
  }

  deletetask(index:any,id:string){
    this.api.deletetask(id).subscribe(res=>{
      console.log(res);
      this.api.list.splice(index,1)
      this.index=this.api.index=0
      this.id=this.api.id=''
     this. dismissmodal()
    
    },err=>{
      console.log(err);
      
    })
    
    
     }


     dismissmodal(){
       this.ui.togglemodal()
     }

}
