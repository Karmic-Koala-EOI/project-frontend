import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PostContentComponent } from './components/post-content/post-content.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { RemindPasswordComponent } from './components/remind-password/remind-password.component';
import { RPGCookiesComponent } from './components/rpg-cookies/rpg-cookies.component';
import { RpgLegalNoticeComponent } from './components/rpg-legal-notice/rpg-legal-notice.component';
import { RpgLegalTermsComponent } from './components/rpg-legal-terms/rpg-legal-terms.component';
import { RpgPrivacyPolicyComponent } from './components/rpg-privacy-policy/rpg-privacy-policy.component';
import { UserIsLoggedGuard } from './guards/user-is-logged.guard';
import { SocialMediaAccountsComponent } from './components/social-media-accounts/social-media-accounts.component';
import { StatisticsComponent} from './components/statistics/statistics.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
},
{
  path: 'login',
  component: LoginComponent,
},
{
  path: 'register',
  component: RegisterComponent,
},
{
   path: 'remind-password',
   component: RemindPasswordComponent,
 },
 {
  path : "dashboard",
  component : DashboardComponent,
  canActivate: [UserIsLoggedGuard]
 },
{
 path : "dashboard/social-media-accounts",
 component : SocialMediaAccountsComponent,
 canActivate: [UserIsLoggedGuard]
},
{
 path : "dashboard/post-content",
 component : PostContentComponent,
 canActivate: [UserIsLoggedGuard]
},
{
 path : "dashboard/profile",
 component : ProfileComponent,
 canActivate: [UserIsLoggedGuard]
 },
{
  path: "cookies-policy",
  component:RPGCookiesComponent,
},
{
  path: "legal-notice",
  component:RpgLegalNoticeComponent,
},
{
  path: "legal-terms",
  component:RpgLegalTermsComponent,
},
{
  path: "privacy-policy",
  component:RpgPrivacyPolicyComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
