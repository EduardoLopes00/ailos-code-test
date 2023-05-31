import { RouteUtilsService } from '@app/services/route-utils.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { menuItems } from '@app/utils/menu-items';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  menuItems = menuItems

  constructor (private routeUtilsService: RouteUtilsService) { }

  getActivatedRoute(routeName: string): boolean {
    return this.routeUtilsService.actualRoute$.getValue().url == routeName
  }
}
