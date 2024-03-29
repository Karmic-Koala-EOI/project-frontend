import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RemindPasswordComponent } from './components/remind-password/remind-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RPGCookiesComponent } from './components/rpg-cookies/rpg-cookies.component';
import { RpgPrivacyPolicyComponent } from './components/rpg-privacy-policy/rpg-privacy-policy.component';
import { RpgLegalTermsComponent } from './components/rpg-legal-terms/rpg-legal-terms.component';
import { RpgLegalNoticeComponent } from './components/rpg-legal-notice/rpg-legal-notice.component';
import { from } from 'rxjs';
import { DashboardNavbarComponent } from './components/dashboard-navbar/dashboard-navbar.component';
import { SocialMediaAccountsComponent } from './components/social-media-accounts/social-media-accounts.component';
import { PostContentComponent } from './components/post-content/post-content.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeNavbarComponent } from './components/home-navbar/home-navbar.component';
import { StatsComponent } from './components/stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RemindPasswordComponent,
    DashboardComponent,
    RPGCookiesComponent,
    RpgPrivacyPolicyComponent,
    RpgLegalTermsComponent,
    RpgLegalNoticeComponent,
    SocialMediaAccountsComponent,
    PostContentComponent,
    DashboardNavbarComponent,
    ProfileComponent,
    FooterComponent,
    HomeNavbarComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
