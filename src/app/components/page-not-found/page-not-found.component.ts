import { RouteUtilsService } from '@app/services/route-utils.service';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {  
  constructor(private location: Location) { }

  handleBackButtonClick(): void {    
    this.location.back();
  }
}
