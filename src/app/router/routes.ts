import { Route } from "@angular/router";
import { WelcomeComponent } from "@app/components/welcome/welcome.component";
import { MemberRegistrationComponent } from "@app/components/member-registration/member-registration.component";
import { PageNotFoundComponent } from "@app/components/page-not-found/page-not-found.component";
import { NotificationBellComponent } from "@app/components/skeleton/header/notification-bell/notification-bell.component";
import { AvatarComponent } from "@app/components/skeleton/header/avatar/avatar.component";

export const routes: Route[] = [
    {path: 'welcome', component: WelcomeComponent},
    {path: 'register', component: MemberRegistrationComponent},
    {path: 'not-found', component: PageNotFoundComponent},
    {path: 'fav', component: NotificationBellComponent},
    {path: 'search', component: AvatarComponent},
    
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path: '**', redirectTo: 'not-found'}
]