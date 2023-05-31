import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  foundValidCPF$ = new BehaviorSubject<boolean>(true);
  
  constructor() { 

  } 
}
