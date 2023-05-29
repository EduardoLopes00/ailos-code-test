import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router'
import { headerDataByRoute } from '@app/utils/headerDataByRoute';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuName: string = '';
  menuPath: string = '';

  constructor(private router: Router) {    
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.menuName = headerDataByRoute[val.url].title;
        this.menuPath = headerDataByRoute[val.url].path
      }
    });
  }
  
  ngOnInit(): void {
    
  }

  

  clickButton() {
    console.log(this.router.url);
  }

  
}
