import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

//import {AuthServiceConfig} from 'angularx-social-login';
//import {SocialLoginModule, GoogleLoginProvider} from 'angularx-social-login';
//import {HttpClientModule} from '@angular/common/http';
//import {FormsModule} from'@angular/forms'

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

//const config = new AuthServiceConfig([
//  {
//  id: GoogleLoginProvider.PROVIDER_ID,
//  provider: new GoogleLoginProvider('')
//  }
//  ]);
  
//export function provideConfig() {
//  return config;
//  }

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
    RpgLegalNoticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
 //   SocialLoginModule,
  //  HttpClientModule,
    //FormsModule,
  ],
  providers: [CookieService,
 //{ provide: AuthServiceConfig, useFactory: provideConfig }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
