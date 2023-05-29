import { Component } from '@angular/core';
import { menuItems } from '@app/utils/menu-items';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  menuItems = menuItems
}
