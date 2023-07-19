import { Component } from '@angular/core';
import { DesignService } from './design.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'behaviour-subject';
  userName:any="Pratibha jain"
  constructor( private ddataServ:DesignService){
   
    this.ddataServ.getUser().subscribe(res=>{
      this.userName=res
      
    })
  }
 
}
