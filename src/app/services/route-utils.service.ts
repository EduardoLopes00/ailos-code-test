import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, Event } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

function getInitialURL() {
  return window.location.pathname.split('/')[1]
}

type RouteEvents = "NavigationEnd"

type FunctionPerRouteEventType = {
  [key in RouteEvents]: (val: any) => void;
};

@Injectable({
  providedIn: 'root'
})
export class RouteUtilsService {    
  public actualRoute$: BehaviorSubject<NavigationEnd> = new BehaviorSubject(new NavigationEnd(0, getInitialURL(), ''));
    
  functionPerRouteEvent: FunctionPerRouteEventType = {
    "NavigationEnd": (val: NavigationEnd) => this.actualRoute$.next(val)    
  };

  constructor(private router: Router) {         
    router.events.subscribe(val => {
      const functionName = val.constructor.name as RouteEvents
      
      this.functionPerRouteEvent[functionName] && this.functionPerRouteEvent[functionName](val)
    })
  }
}
