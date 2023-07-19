import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignService {
  usernamee!: BehaviorSubject<string>

  constructor() { 
    this.usernamee=new BehaviorSubject('all');
  }
  
  setUser(value:any) {
    this.usernamee.next(value);
  }
  getUser() :Observable<String> {
    return this.usernamee.asObservable();
  }
}
