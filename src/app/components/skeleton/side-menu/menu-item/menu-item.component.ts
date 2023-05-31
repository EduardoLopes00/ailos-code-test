import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() route: string = '';
  @Input() label: string = ''
  @Input() icon: string = ''    
  @Input() isActive: boolean = false;

  constructor(private router: Router){}
  
  handleMenuItemClick() {
    this.router.navigate([this.route]);    
  }
}
