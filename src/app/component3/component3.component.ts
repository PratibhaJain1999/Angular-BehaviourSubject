import { Component } from '@angular/core';
import { DesignService } from '../design.service';


@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component {
  userName:string="Pratibha jain";
  constructor( private ddataServ:DesignService){
    // this.ddataServ.userNamee.subscribe(res=>{
    //   this.userName=res;
      
    // })
    this.ddataServ.getUser().subscribe(res=>{
      this.userName=res
    })
  }

  update(uname:any){
    // this.userName=uname.value  
    // this.ddataServ.userNamee.next(uname.value);
    this.ddataServ.setUser(uname.value)


   
      }
}
