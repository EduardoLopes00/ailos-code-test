import { Component, OnInit } from '@angular/core';
import { RouteUtilsService } from '@app/services/route-utils.service';
import { headerDataByRoute } from '@app/utils/headerDataByRoute';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuTitle: string = '';
  menuPath: string = '';

  constructor(private routeUtilsService: RouteUtilsService) {    
    this.routeUtilsService.actualRoute$.subscribe(val => {
        console.log(val)

        const {title, path} = headerDataByRoute[val.url] || headerDataByRoute['/not-found']
      
        this.menuTitle = title;
        this.menuPath = path      
    })
    
  }
  
  ngOnInit(): void {
    
  }

  

  clickButton() {
    
  }

  
}
