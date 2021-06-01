import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RemindPasswordComponent } from './components/remind-password/remind-password.component';
import { RPGCookiesComponent } from './components/rpg-cookies/rpg-cookies.component';
import { RpgLegalNoticeComponent } from './components/rpg-legal-notice/rpg-legal-notice.component';
import { RpgLegalTermsComponent } from './components/rpg-legal-terms/rpg-legal-terms.component';
import { RpgPrivacyPolicyComponent } from './components/rpg-privacy-policy/rpg-privacy-policy.component';

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
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
