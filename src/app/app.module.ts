import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { routes } from '@app/router/routes';

import { AppComponent } from './app.component';

import { SideMenuComponent } from './components/skeleton/side-menu/side-menu.component';
import { FooterComponent } from './components/skeleton/footer/footer.component';
import { HeaderComponent } from './components/skeleton/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MemberRegistrationComponent } from './components/member-registration/member-registration.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NotificationBellComponent } from './components/skeleton/header/notification-bell/notification-bell.component';
import { MatIconModule } from '@angular/material/icon';
import { AvatarComponent } from './components/skeleton/header/avatar/avatar.component';
import { MenuItemComponent } from './components/skeleton/side-menu/menu-item/menu-item.component';
import { StepperComponent } from './components/member-registration/stepper/stepper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    FooterComponent,
    HeaderComponent,
    WelcomeComponent,
    MemberRegistrationComponent,
    PageNotFoundComponent,
    NotificationBellComponent,
    AvatarComponent,
    MenuItemComponent,
    StepperComponent    
  ],
  imports: [
    RouterModule.forRoot(routes),    
    BrowserModule,        
    BrowserAnimationsModule,    
    FormsModule,
    ReactiveFormsModule,    
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,  
  ],  
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
