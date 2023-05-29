import { Route } from "@angular/router";
import { WelcomeComponent } from "@app/components/welcome/welcome.component";
import { MemberRegistrationComponent } from "@app/components/member-registration/member-registration.component";
import { PageNotFoundComponent } from "@app/components/page-not-found/page-not-found.component";

export const routes: Route[] = [
    {path: 'welcome', component: WelcomeComponent},
    {path: 'register', component: MemberRegistrationComponent},
    {path: 'not-found', component: PageNotFoundComponent},
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path: '**', redirectTo: 'not-found'}
]