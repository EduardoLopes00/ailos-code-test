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

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    FooterComponent,
    HeaderComponent,
    WelcomeComponent,
    MemberRegistrationComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(routes),    
    BrowserModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
