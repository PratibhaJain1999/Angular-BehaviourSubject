import { Component } from '@angular/core';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component {
  userName:any="Pratibha jain";
  constructor( private ddataServ:DesignService){
   
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
