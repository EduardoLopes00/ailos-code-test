import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

function getInitialURL() {
  return window.location.pathname.split('/')[1]
}

@Injectable({
  providedIn: 'root'
})
export class RouteUtilsService {
  public actualRoute$: BehaviorSubject<NavigationEnd> = new BehaviorSubject(new NavigationEnd(0, getInitialURL(), ''));
  
  constructor(private router: Router) {     
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.actualRoute$.next(val);                        
      }
    })
  }
}
