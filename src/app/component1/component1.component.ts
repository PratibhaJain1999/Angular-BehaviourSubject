import { Component } from '@angular/core';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
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
